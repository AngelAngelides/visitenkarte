export const scrollToId = (event, id) => {
    event.preventDefault()
    const el = global.document.getElementById(id)
    if (!el) return
    el.scrollIntoView({
      behavior: "smooth",
    })
  }
  