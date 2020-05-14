interface Elg {
    foo?: string;
}

export const test = async() => {
    console.log("🎬 running test");
    console.debug('before');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.warn('after');
    await new Promise(resolve => setTimeout(resolve, 2000));
    throw Error('🤬 omg');
    return "🧪 test complete"
}





export default test;