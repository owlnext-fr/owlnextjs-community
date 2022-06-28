let __isCalling = false
let __eventHandlers: any = {
    scroll: []
}

export const lazyLoading = (callback: () => void, loader: Boolean, endListing: boolean): any => {
    return () => {
        const element = document.getElementById('scrollContainer')
    
        if (element) {
            if (((element.scrollHeight - element.scrollTop) <= (element.clientHeight + (element.clientHeight / 100 * 100))) && !loader && !endListing && !__isCalling){
                __isCalling = true
                callback()
            }
        }
    }
}

export const addListener = (
    document: { getElementById: (arg0: string) => any },
    callback: (filters?: string) => void,
    loader: Boolean,
    endListing: boolean
) => {
    if(typeof(document) !== 'undefined'){
        const element = document.getElementById('scrollContainer')

        if(element !== null){
            addEvents(lazyLoading(callback, loader, endListing))
        }
    }
}

export const addEvents = (handler: any) => {
    const element = document.getElementById('scrollContainer')
    __eventHandlers.scroll.push({ node: element, handler: handler, capture: false })

    if (element) {
        element.addEventListener('scroll', handler, false)
    }
}

export const resetIsCalling = (
    document: { getElementById: (arg0: string) => any }
) => {
    __isCalling = false
    const element = document.getElementById('scrollContainer')
    __eventHandlers.scroll
      .forEach(({ node, handler, capture }: any) => {
            node.removeEventListener('scroll', handler, capture)
      })

      __eventHandlers.scroll = __eventHandlers.scroll.filter(
        ({ node }: any) => node !== element,)
}