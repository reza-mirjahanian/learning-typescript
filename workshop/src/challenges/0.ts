interface Post {
    id: number;
    content: string;
    tags: string[];
    createdAt: Date;
    userId: number;
}

const posts: Post[] = [
    {
        id: 10,
        content: "First Post",
        createdAt: new Date(),
        tags: ['technology', 'news'],
        userId: 1
    },
    {
        id: 11,
        content: "Cool Post",
        createdAt: new Date(),
        tags: ['space'],
        userId: 2
    }
];

// keyof

type keyOfPost = keyof Post;

function findPosts<field extends keyOfPost>(userId: number, fields: field[]): Pick<Post, field>[] {

    let filteredPosts = posts.filter((p) =>
        p.userId === userId
    );
    let answer: Pick<Post, field>[] = [];

    for (let post of filteredPosts) {

        let tmpOjb = fields.reduce((a, b) => {
            let tmp = {[b]: post[b]};
            return {...tmp, ...a}

        }, {}) as Pick<Post, field>;

        answer.push(tmpOjb);
    }
    return answer;

}

console.log(findPosts(2, ['id', 'content']))
