function repeatChecker(characterList) {
    let splitList = characterList.split(" ")
    // splits each character(s) from the string characterList into an array of character(s) by using the spaces as separators.
    let finList = []
    for(let i = 0; i < splitList.length; i++) {
        if (!(finList.includes(splitList[i]))) {
            finList.push(splitList[i])
            // if the character(s) are unique, they will be added to the array finList. For example, the character 前 appears multiple times in splitList, so only the first instance is added to finList.
        }
    }
    console.log(finList.join(' '))
    //the .join() modifier joins all of the array into a single string, separated by spaces (' ')
}

repeatChecker("番 輝 星 度 指 折 前 見 小 握 拳 振 返 想 時 数 頃 終 手 開 新 始 運命 時間 相容 絶体 絶命 明日 息 散 花残 香 求 本心 信 救 詩 描 糸 紡 作 我 絆 笑愛 過去 歌 瞬 超 未来 勇気 愛 知 前 欲 目 閉 前")