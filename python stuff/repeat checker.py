def repeat_checker(characterlist):
    splitlist = characterlist.split()
    # creates an array named [splitlist] with an item for each character(s) between spaces from the list [characterlist]
    finlist = []
    for x in splitlist:
        if  x not in finlist:
            finlist.append(x)      
    # adds an item into the array [finlist] with each item being a unique instance of character(s) from the list [splitlist]
    print(*finlist)

    






repeat_checker("番輝 星 度 指 折 前 見 小 握 拳 振 返 想 時 数 頃 終 手 開 新 始 運命 時間 相容 絶体 絶命 明日 息 散 花残 香 求 本心 信 救 詩 描 糸 紡 作 我 絆 笑愛 過去 歌 瞬 超 未来 勇気 愛 知 前 欲 目 閉 前")
