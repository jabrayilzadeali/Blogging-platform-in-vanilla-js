export const db = [
    {
        author: "Bob",
        posted_date: "10.02.2000",
        blogs: [
            {
                name: "something",
                content: {
                    header1: "Header text",
                    header2: "",
                    header3: "",
                    header4: "",
                    header5: "",
                    header6: "",
                    text: "lorem ipsum dolar sit amet",
                    unordered_list: ["a", "b", "c"],
                    ordered_list: [
                        {
                            order: 1,
                            text: ""
                        },    
                        {
                            order: 2,
                            text: ""
                        },    
                        {
                            order: 3,
                            text: ""
                        },    
                    ],
                    link: {
                        title: "",
                        url: ""
                    },
                    blockquote: {
                        order: 1,
                        author: "",
                        quote: ""
                    }

                }
            }
        ]
    }
]

export const authors = [
    {
        id: 1,
        author: "Ali",
        password: "ali1234"
    },
    {
        id: 2,
        author: "Islam",
        password: "islam1234"
    },
    {
        id: 3,
        author: "Sahin",
        password: "sahin1234"
    },
]