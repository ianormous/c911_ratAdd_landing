export default function MoreFacts(props) {

    async function handleTest1Click() {
        let res = await fetch('/api/test1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ msg: "this is the post from test1" })
        })
        res = await res.json()
        console.log(res.msg)
    }

    async function handleTest2Click() {
        let res = await fetch('/api/test2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        res = await res.json()
        console.log(res.msg)
    }


    return (
        <div>
            <button onClick={handleTest1Click}>test 1</button>
            <button onClick={handleTest2Click}>test 2</button>
        </div>
    )
}
