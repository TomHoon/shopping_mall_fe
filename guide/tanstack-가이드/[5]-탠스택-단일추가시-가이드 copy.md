# 1. 단일 추가 후 무효화 하지 않고 기본 캐시에 추가하기
```
  const { mutate, isPending } = useMutation({
    mutationFn: (content: string) => insertTodo(content),
    onSuccess: (newData) => {
      // ❗️ [OLD] 무효화 버전
      // queryClient.invalidateQueries({
        //   queryKey: QUERY_KEYS.todo.list
        // })

      // ✅ 캐시 리스트에 추가하는 버전 (setQueryData 사용)
      queryClient.setQueryData<Todo[]>(
        QUERY_KEYS.todo.list,
        (list) => {
          if (!list) return [newData];
          return [...list, newData]
        }
      )
      toast('추가 완료');
    },
    onError: (err) => {
      toast(err.message);
    }
  })
```