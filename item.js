async function loaddashboard(){
    const responses =await Promise.all()([
        fetch ("/Student"),
        fetch("profile"),

        ]);
}
loaddashboard();