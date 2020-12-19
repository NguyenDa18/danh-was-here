---
template: BlogPost
path: /encrypt-python-fernet
date: 2020-12-19T00:24:20.065Z
title: Encryption Protection with Python Fernet
---
# Protecting data using Python

## Necessary import
```python
from cryptography.fernet import Fernet
```

## Generate secret key to be used
```python
def generate_key():
    """
    Generate key and save to file for DynamoDB email table
    """
    key = Fernet.generate_key()
    with open("secret.key", "wb")  as key_file:
        key_file.write(key)
```

## Meat of necessary code, includes encryption and decryption
```python
def load_key():
    return open("secret.key", "rb").read()

def encrypt_text(text):
    key = load_key()
    f = Fernet(key)
    return f.encrypt(bytes(text, "utf-8"))

def decrypt_text(encrypted_text):
    key = load_key()
    f = Fernet(key)
    decoded = f.decrypt(encrypted_text)
    return decoded.decode("utf-8")

def test_security(test):
    """
    >>> test_security("hello@test.com")
    'hello@test.com'
    """
    encoded = encrypt_text(test)
    decoded = decrypt_text(encoded)
    return decoded

if __name__ == "__main__":
    import doctest
    doctest.testmod()

```
