(() => {
  const ab2hex = ab => [...new Uint8Array(ab)].map(x => x.toString(16).padStart(2, '0')).join('');
  window.tinyPow = async (data, n=3) => {
    let salt, i = 0;
    while (ab2hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(data + salt))).slice(0, n) !== "0".repeat(n)) {
      salt = ab2hex(crypto.getRandomValues(new Uint8Array(8)));
      if (i++ > 999999)
        return;
    }
    return salt;
  }
})();