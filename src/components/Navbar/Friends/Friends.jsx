import React from 'react';
import s from './../Navbar.module.css';

const Friends = (props) => {

    return (
    <div>
    <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQTExYUExQWGBYUGxkdGhoaGhoaHBwhHxkcGxgaGhwaICsjGh8oHxwdJDQjKSwuMTExHSE3PDcwOyswMS4BCwsLDw4PHRERHTApISgwMDAwMDAwMi4wMDAwMDAwMDAwMDAwMDAwMC4wMDAwMDAwLjA5MDAwMDAwMDAwMDAwMP/AABEIAOUA3AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQYEBwECAwj/xABMEAACAQIDBAYFBgoHCAMAAAABAgMAEQQSIQUGMUEHEyJRYXEUMlKBkSMzQqGisRYXYnJzgpKTssEVNUNTg9HSJCVUY3Sz0+FEo8L/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAKBEBAQACAQMEAAYDAAAAAAAAAAECEQMhMVEEEhNBBSJCYZGhFBWB/9oADAMBAAIRAxEAPwDc1KUoFKUoFKUoFecrWUnuBr0rE2m1ozUqxCJLIHLmRrnly+FZke05Bxsw+B+qsEEk3ru0oFcbnp3nHtN4THrJw0Pcf5d9ZNVSWQctDXZN52j7Lrm7jex9+mtJzY/aXgy+lppVZ/DDui+1/wCq4ffNEHyiEeRJ/lWvmw8sfDn4WelQMe9sJXNZvhXX8MYDwDe8EVfkw8nxZ+FgpVZj3yS5DRkG+mv/AKrpJvcWOVEy+J1+FZ+bDyvw5+FmklCi7EAVGz7Y4hB7z/lUP6UWJLm5PM13Evd8anzS3Ua+GybrNhxUjSJeQ2LC4AAHlU7ULsiO8lzrYH/KpquuN3HLKarmlKVpkpSlApSlApSlApSlApSlBwTVV3p3nSMiNDmJOtuHCsvenaDKMiNb2qp0kCDW2vfXk9Rz+zpHr9Pwe/rUq+1wVuDr3V4x7SzDxqIEIvevZpDwjW/jXgy5bk+hhxTFnjFEnWuepudLH31hejsdWPurJgeMKVJNzwNqzjN92srrs7SMq+uwFvEVmOIZ47K6k+YqA2rshJIWj4OwNnvUVsLdIRqc7m44G969GOOEjzZXO1eMFs4ZOQI7tax8RgiwtzU3BqH2XtxsKSmIJKn1eenKpeDbMRuy3sR3Gs24t4zJyuHLr2/WU16nCjsstraX5VFPttM5vfKfA61h7U28HIQZlS1tAeNMfaZ+7SwY/EwDQOM3cDeseKfTssLVTG3bfrBIjEqdTrx91WPZ+FQIesOXuA1vW7ZOznjMr3WzdzGLftMAeFWQGtVgm9kJt31J7E3glhcI/ajJ1v8Ay7q9HFzTtXn5eG942FSvLDTh1DLwNetet5ClKUClKUClKUClKUCvGedUUs7Kqi2rEAamwuT4m1e1UXpowjvgQyk5Y5ELgcCDdQT5MR8fgg8tuYSaNmaUWBOjDVT3a8j4GoRXJ5FvHhUHunv/AD4UCKUdfh+BRjdlHdGzch7B00sMtXvAw4XGpnwWJVc3GNxdlNwLZSwZfrB0sbV4uf0mVu8Xt4PV44zWSJXDScSAB5iveDaSxixWpGXc7E8pYyNfaBPdpa3114HdiVDrDn8Qy/de9eS+n5Mb2eyeo4sp3YDbWzt2VI+NSmGwnWDRReuYkkTjA6jxU/faszCTi/Cx7q3jx+XPLl8Mdtg3GulcxbFyiyip2JriuXiNd8eLGuGXNkr52HmPbUE1JQ7CisLgCsyRHtppXkMGx9Z63OLCfTN5c6gds4CLDtnzXzGwFuF6kNnbBhdQ5sSw8KypNiwue0M1q5i2UIzeI5fDjWvjwY+TNG4zYWU9nhXhLu8ON7HnU+8jAdqorHbYC3sL++ueWGLrjnkiZEWAjMPfWNtCdb3HD+demN2pHJZWFj8a4OyZJQAsTkcjlby41w9l30dvfNdU/uPtS94mbxUH7hVsqn7o7DkifNLGVA9UkrxvYaA3+qrhX0OOWY9XzuSy5dHNKUrowUpSgUpSgUpWFtTakOHTrJpFjXvY2v4AcSfAUGZVS6W3I2bNbm0QPl1q1A7a6YEVsuFhMgHF5CUB/NUXPvNvKq3vHvzPtOIYYYYXLKwEeeRtL6ZQPGtSVNqdXBFcupBZToykqw5gg2IPcQaV0ZXvcHD3gDS4rFRGWYQwCKVwLhLm6G6Ea21GluVZO1d69oYJQ/pSTI0s0aCSJbkRsFLkplvrcfH3ZW6/UpBhFKs08UE+JiJNo7ljfPbW9uBta1VvemB5ZMDhh65hiv8AnzMWc/E3rH20s2H6TsZGsLYjBIwxAvG0bFM4v9FDnJOqixIvx56SadKuDJyTw4iJuYeNTbTuBza/m1gbVaL0/ZiqQscfXIl+GaM9Wg97KPqrzwO8TyYjC4XEIkuIvNHiM6aKCVdculm7KcamoJ6HpC2U1h12Um3GGVbeZCZR53tWbHvbs5uGLiW3e+X4Z+Nan25NBiHEkWHSJWlWPKlgCAO0dABrUa+z1y4hhf5J7L5ZrG/urfw7m2Pm1dN3/wBK4SQApjIDfh8pGfD2u+uVwMhaySxt4X18TpetJvsqPICHObKjkWHAkAkfGpTcvY6rtHC3/vnHAfQRmU++wqZen1Nrj6nd1G1pZBD87NDGPy5FXlfn4a1G4rfTZ8Q1xiHh82ry8r8UBHv4X41pzbbBsTiHsBnmmb4yMf51i1znHHS8lbT2h0k4C9gmKl4agIi+PrMG+ryqGm6SIgfktnx8tZJWk8+zl+u9UWlanHj4S55VbW6Tcda0Yw8X6OK3f7bN31F4rfHHyevi5uXqN1fD9HlqGpWpJGbbV16J8I2I2issjM/o8bMGZixBPYQdq5+m591brrXnQhs3JhppyNZpMo/NQf6mf4VsOsZd1jmlKVFKUpQK6k2rmtSdJ29U8uIOBwzEKCqOF0MjsQMl/ZFwtuZverJsSW/PScIyYcEVd+DS+sq+CcnPjqPPlRdl7Ex205S6h5CT2ppCQg8Mx429lQSO6tgbt9FmHgHW4x1lZRcr6sK21N76uB3tYeFSzbcknUps8JHAgs2LkW0SAceoTTrbe1cRjvbhV3J2TSuLuTs/AqnpbPiZ39SFL5nI5RxqQzAc2Y5e+1SOKwojiX0xlwkD6JgsL85KfZd4hnkbvSKw72YU2QryFxswEl9JtpYgFy9v7lTbrQNbAZYxyvU3DgMJs5GxM8hMhHbnmbPK545V7h3RoAO4VN7VBzbmjHCMy4ePBYeIfJxoqekMuujut0iTW+QZjfiRwrWG8eEginaPDTGaJbWcgDXmARo4GnaAAPdpczu/HSBLjc0UV48MdMv0pBfjIeQ4dgeNyeUTudsQYzFRwMSEIZnK2uFUX0v3mw99ak0zerrs/efEwpkVlZeraMB0Viqt6wVvWUc7Xt4VNYPe7CmeHETYVxNCFUMj5lYLGUS6NbLyOndUXv1sOPB4owxMzJkVhmsSM1+ySLX4X94qDq6lRfZNr4bGrFnMMMyQ4gKpLRokzSIYmDfFvO9ZjyqdpRy50d4cEzzSIQwZxGyk3Gl9R7rVraisRwJHLTTzFPau09siTKmHXKp6xnJuL2tzHca7RxHqXbk4lc++2T6gag48S6kEMRluB4X42r0GOe5N73TJw+j3CvROSa1XmvFd7jL2gXBAS+kKK9hfQ9/dyq5boJ/vLDnTLGs8jH/DyH3jMKpL7XY3uqa5cxAIJCm4B14aVZuj3ahabEMygtFhsTKNbc4wV8tamWePtsl7rjhl7pbOyko5YAsSWOpJ4knUk+N65rhRoK5rk7lKUoFeiYdyjOEcolgzhSVW+ihmAst+V+NedW/crf5sInUTRJJhyTcBQHGb1vCQeDa+PKpReeineHDyYWPDIck0KnMjWu2pZnT2gSSbcRz7zea03tTdGKcembHlzZCGaFSRJGeN476qfyD42J0FTm5PSYHIw+PIjlHZEhGVSRpaQf2beOg8q52NbbIpXANc1FKUpQRO9W2FwmGlnPFF7I72OiD9oj3XrV/RFshsRi3xUl2EF2ufpSvfXxsCx8ytTvTrKRDhlucpdyRyJCixPlc/Gs3Z+DbZ2xJGjNpjC8mYWPyki9i3I5boo/NFa7RPtIY8f0jiDh+OEwzDrzymlFisHiies/ecq+1XWXCJtDFPG6hsHg7IU+hLNoSGUaOkS2GU6ZmPs1kbS/3fgViwyjrCUihB1vJK2UO559omRjzs1R+9GOGyNmqkLXkJCK7C5Z2u8krd7HttrpmI8qyrO3x3xg2fHbR5iOxEpt4At7CePwBrS23tuz4uUy4hyx1yrwRB7KLyH1nmTWHicQ8jtJIxd3N2Zjck95Nedbk0za9FwzlDIFJRfWYahe7Nb1b8ieNXzoWwV5sRMR6iKgP57Zj/AAD41SNmbRlw8glhYq6+8EHirA6Mp5g1uXdHHRDA+knDphwQ8kqogQEpcM4HEghbi/hVy7Ea7312ZisRi8ROuGnaPOVDCNyLIAlxpqOze/CqrW1Pw4xZPWLBD1fEREt1uXld75Q1uVrcr86ielLAQPFh8fALek2DWFs2ZC6MRyaykHv07qtxyx17ozLL2UGlKVVKUpQKte4hy4baj3tlw2W+t7vnC2t4j7qqlWzdNT/Ru1CgzPlgut+CB2Lvb8kFj7qlIqdKUqhSlKBSlKD32fjpYHEkMjRuvBlNj5HkR4HSr9gMPh9uREOVi2hEt2dR2ZVGmdl+kNQDbVTbkQD22zuNhhsmPFJmSZII5GYEkSFlUsGVibcTYi1vEaVr/Z+OkgkWWFykiG6sOXn3g8CDoRWO7S77B3txWyZvRMapeNbaXuyqTo8bfTTjp4EaEEVtbZe04sRGssLh0bgR9YI5EdxrVu+OMj2rgFxkShZ8KbTR8SEbmPaXMAwPdn5g1Ud3N4p8FJ1kL2vbMh9Rx3MP58RU1tNvo2lR+7+0vSMNDPly9aitlve1xwvzqQrLTWfTz81hvz5P4RU/vGC2AwsQv8tLgkPl1sbP7sqtUB08/NYb8+T+EVPba0j2U7equIgv4F4JI0P7bqLeNW9kZO2fldo4KE+rEs+IN+bKFhS3fbrmPwrXfTLtnrsWsCns4dbNxtncBm8DZcgv35hWxd5h1eKwE/8AzZIGP5M0ZK3/AMSOMe+qp0u7oXBx0K6qPlwOagWEvmo0bwAPI3uPcrVtKUroyGtz7qbSw2Iwy4LrxJIsCrKLm5zJZ8rH18t7G17aVpipbdPbYwc5nyZ2VHCLewzNYXY91s3D/wBjNm1i8rufjgeqBgKjTrszA24ZjFl9a3LNa/OvDpYwogwmDw6X6uMkC/HsRhVv4kE1XJekHGukytLYy5SpQBOqswJCW1sQLEEn77y209vDaez2RwPSsLaUgaCRFBWR1HgrXK94uNKuWeWWvdUmOM7KJSlKoUpSgVPbhbZGGxaM/wA1LeKUE6ZHsLnlYGxPgDUDQisiS3p2McJiZcOb2RuwTzQ6ofHQgHxBqNq37fPpuzoMYBebCkYee2pyjWJ2vx9YcOcjd2lQqwpSlKoUpSg3Ztr+oB/0kX8CVpOt54nCGbYYjX1jg0I53IiVgPfa1aMBrGK1sPoTw6SNjY3AKyRxqw71JlDD6/rqh7RwwimliVs4jd0De0FYqG99qtHRptgYb02TXMuGaRe66MoF/wBZ1+uqgPj4mk7o+hOj/wDq7C/ok+6p2ojc8WwOFt/cQ/8AbW9S9YrbWnTx81hvz5P4VrH2TvGcVsedW1n2escl/aELiSNvO0RU+IvzrI6d/msN+fJ/CtVvcAf7Dtr/AKQ/9vEX/lWv0p9tp73YJsRg36n51QssJ/5kZEkXxZQPIms3ZePTEwRTJqkyK4B7mW9j8bV7bN+aj/MT+EVB7hssezomZgq/KOWJAADSu17nQDWsq0lvJgxDisREBlWOaRVHcuc5PdltWBVk3wgOK2hiHwaviEYowaFHkGqKpJKg6F1fXhoddKwMXuvjIlVpMPKoZlRSRa7MbIvHQkkAX5mum2EVSrBtncbHYYXkgZ107UXygHgQvaW3eRbxqvg0Cu+HnaN1dGKshupHEGulK0BpSlApSlApSlBad2iE2XtOTUlvRo7X0F5SAfPt/VVWq1bMuNi4s2tnxMSk29YKI3Av4HX499VWsxaUpStIUpSg250L7wdZC+EkbtwdqPvMZOo8crH4Mo5VV+kbcaTCyPPCobDO1+zxiLE9lh7F+DeIBtoTXN29sthMRFiFBPVntKPpKdHXuuQTa/Ox5V9Dxuk0YYZXjkUEaXVlYdx4gg1i9Ks6tDdH20/R8dAx9SQ9U9+BWTs6+AbKfdUz0r7pphZI54FyxTEqyj1UcC4y9wYXNuWU1j9IO4kmFmzYeN3glJyBFZzGeJRrXNuanuuDwudh4/DHaeytVtLJGGANwVlTipvqO2pU+BNLftUjuLillwGGZDcCJEPmihGHxU1OVqzoR23Yy4R7i/yiA6WIssi68/VNvBq2pWLCKxv1uh/SKxL13V9UzG+TPe4At6wtwqK2L0cthoMXCuJDDGRdWSYj2BlkW4Al1+c+qr5SrtWs9/t5dpbPCoiQ9SQqpMFYkkItwVLERte9r3uB8OvRXs7D4zCqZy88mHOTqpWzRRjihSLRDcfSYE3VtdK2FtXZ0eIieKVQySCxB+8dxHEHka05u9iDsfazwOx6lmEbsdLo1mikPLski55AvSdRsjba+j4zC4gACOW+Fl5AZjnw7e6QFP8AFqV3h2UuJw8kDG3WLYMOKtxRx4qwDDxArpvNsv0nDSwA5Wdew3supDRv+q4U+6u27W1PScNDMRlZ1GdfZcdmRP1XDD3VBWsZj8ZidmibDSMmMw7ESxqFOaSIlJoirA8dWUc+z33qhfhlhMXb+kcEuY2+Xw5yScgCykjOOepPgtbIRvRNqFeEO0lzL3LPEtmHcM8QB8TH41rbpa3bGFxQkjFosTmYADRXBHWDuAOYMPM91aiOW3Qw82uB2jA4Iv1c7dVKOF7i3a48cqjzrxxfR1tFNRhxINdY5I2+osCb+XwqpEV64TFSRfNSPH+jdk8/VIrXU6eEhi9hYmK/WYadMt7lo5AunEhrZSPEG1YnUP7DfsmpPCb7bQi9TGTfrkS8rf2oaskdI+1P+Mb91B/4qdU6IT0d/Yb9k/5V0kjKi7Agd5BA+urB+Mnan/FH91B/467xdJm0hfNOrg8miit59lRU3fDVxnlWOtX2h8RTrV9ofEVa/wAaG0Pah/dLT8aG0Pah/dLTdZ06YkBdiQksvymOZl15LA8Zv43HwNVfrV9ofEVa/wAaG0OGeG36JafjQ2h7UP7paTaqp1q+0PiKdavtD4irX+NDaHtQ/ulp+NDaHtQ/ulq7qaVeNS3qgtbuF/urNj2JiW9XDYhufZilOnfovCrDs/pIx0k0KSYgRxtIgcxxRA5SwB9dWArK3oxe1xi5sNDPiZVGVlMYAORtVJaJVy6grpa+U+NNmkVsbcbFzMokheCI3LySLkCKtyzFWseWmmtxy1rN230hyIgwuzj1WGiVUSQi8r5Tq9zogbutfidL2Fa2rtHGZmixE2JuBlZJJJeHGzKx1HnUbUVNYLfDHxDLHi57H2m6z65MxFWrdnpTxpdIJIVxLyEItrxOSdAWKgr4khRYXPKtd1troX3VyJ6dKvakBWEEcE+lIL834A+yLjRqXQsG6m4keFmbEyP1s73ObKqqrNcyZAoA1JNtNBp31bqUrClKUoOBWqOnfY2sOKA0IMUn1tGT9sfCtriqR01/1cf0sf3mrO4ndycU0uAwjsSWaGPMTxLBAGJ8yCax9zx1cmNw/wDdYl3UfkzIk3wzvIPdXl0XTF9mYYk3srL7ld1A+AFesQ6vazjlicKjfrQSspP7My/ClEP0xMyw4NkNnGOgykcQbONKweniAHDYd9LrKV48mjYmw56oKl+k6HOMAo57Qw31ZyfqFQHT1ifk8LF7TyPw9lVXj/iUndK1RSlK2FKUoFKV2ijLMFVSzNwVQWY87BRqfdQdaVK7V3ZxeGjSWeB443NgzZePcwBJQnlmAvUVQKUpQKUpQe2FERPyvWZfyAt/tGwrcGJxkuLweHlwvXFOEoDqsxyjKpcowvqCSoP0gbWrTNSWxdv4jDMhhkYKjl8mYhGJADZ1B7QIUDX3UnS7ZvWaXffTd158PAWkQ42FDmiaROueJnYxg3N3dRzubnPqTx1xIhUkMCCOIIII8CDwrtiZ2kYtIxdjcksbnUknj4kn31zBC8rqiKXdyFVRxYnRQL0VP9Hu6xx+JCMD1MVmlYd1+zH5uQR5BjxAr6AjjCgAAAAAADQADgBULuVu4mAwyQixc9qRh9JyBmPkLADwAqerFu1hSlKilKUoOKpPTX/Vx/Sx/eau1Unpr/q4/pY/vNWdx06E8Rm2dl/upZF+NpP/AN1LbGPW7Qxc30YFiw6eYXrpT7+tjH6lVvoPxATAYhnNlSZ2PgBDESfvqz7hQEYOORhZ8QXne/EGZzLY+SsF91L3Ixd9ZlbE7Mh+k+KMgHhFDIWPuLL8aoXTpi82Lhi/u4s3HTtyMLW5G0YPjcVe9nx+kbWnmOqYKJIE7usk+VlYeIXq1rVfSjtIT7RnKm6xWiB8UFn+3mHuq490qsUpStBQm1K2v0b9G2TJisYvbGscJGi8MryD2uYXloTroq3Qjtx+i0zxrNjTJGrWKRL2XK8byEi6A+yLG3MHQbP2Lu/h8IuXDwpGNLkC7Nb2mN2b3k1JVzWLdq8MZhUlRo5EV0cWZWAII8Qa0F0hbrHZ+JKJmMMgzRMTfT6UZPMqfqKkkm9fQlV3f3dsY/CvELCVe3E3c44C/IMLqfA35Ul0lfPNK7OhUlWBDKSCDoQQbEHuIOlda2FKUoFKUoFbW6Gd08o9PlGrAiEHkp0aTzPAeF/a0pG4e7Bx+JWMg9UlnmIuLLfRQRwZyLDnbMR6tfQsUYVQqgAKAAALAAaAADgKmVI9KUpWFKUpQKUpQcVSemv+rj+lj+81dq1P087UYNBAGsmV5HXkTcLGSfCz6eOvKrO4wtxYGbZzwDRto4oQj9EsatiGH+Gsq+dq25i50giZ2sscSFjyAVRc/ACqV0ebMtIgIFsBAsXh102WbFe9R1a+8ipne5jO8Wz0/t+3OfZgQjOD+ka0Y8C/dS9xH7OxpwGyXxcotNMHncHnLM140PlmRPAL4Vo0knUkkniTqSeZPjW0unPbVhBhFPH5WS3dqkY8RfOf1VrVtaxZpSlWLcHdY7QxAQ3EMdmlYd19EB5M9iPABjyqqt3Q9uYGAx06gi/+zqQeRN5SDx19XyzeyRtivKKIKoVQAqgAAaAACwAHIWr1rFu1KUpUClKUGnemjdfqpRjYx2JSFlA+jJbsv4BgLchmUc3rXNfTe19nR4iGSCUXSRSrDgdeYPIg6g94r5y29siTCTyQS+tEbXtYMOKuPBhY25cOVbxrNYNKUqqUpSg2Z0J7xxxl8G4VWkbPG/AubAGNvEAXXv7Q5a7cr5X60p2lYqV1DKSCpGoII1BHG9fT+z2cxRmWwkKLntwzWGa3vvWcoRk0pSsqUpSgUriuaDE2hjooIzJK6oi2BZjYC5Cr8SQPfWmelieGTFx4mPFQmNhHHdbs0eUs2ZkGrDtEi3lppfaW9j5fRpH+ZjnRpT3dl1iZu5RK0ZJ5WB4A1MsiutiAynvsQf8AOrKKrulvNstIBHBi4iEUs3WNkkc6tJI6uAzMTdibc6y9zomdZMdMLPiyGUHQxwrfqEPd2SXb8pz3V5bW6Odm4i+fCxqT9KO8Zv3/ACdgT5iq/i+il41YYLaWJiUggxu5aMgggqchWwseJBNQa23s2z6Xi5p/ou5yfmL2Y/sgHzJqKr3lwUi9achZIJGjeRAWjDKSPWtoDa4vbQivCukR7YLCPNIkUSlpJGCqo5k/cOZPIAmvobczdxMBh1hSxb1pHtbO59ZvLgAOQAqndDG6uRPTpR2pQRCDyT6T+bW0/JH5VbMrOVJHNKUrKlKUoFKUoFa/6Y92PSIBiYh8rhgc1uLR8WHmp7Xlm76v9cML6HgaSj5ZpVl6Rt1/QcUyoLQTXeLuAv24/wBQnh7JTxqsk2410RzSuokB4ak8ANSTyAA4mtn7pdEXWRLLjpJUd9REhUZRyDsVJzd4FrcL1LlF9vlrSPD9YRHe3WELfuzHLf66+m8Nj4pGdI5Y3eM2dVdWZD3MAbqfOq5gujDZkf8A8frD3yO7/ZY5fqqWxO7WGdUVYhGYhaNovknjHGyMlio714HmDWbdmkxSoTdjFSN6RHJJ1hw83Vq5ChmXqYpLvkAXNdyLgAacKm6gUpSgjts7ZgwsfWYiVI04XY2ue5RxY+Aqm47pcgN/RY3lt9Jvk087EF/ioqb3a2ZFKss069bM0uIjdpAHsqTOgRFIskZVFOUDXQm51qB3k6IcPITJg3bDSeyLtEf1eK+42HdWc5bPy93b0+XFjnLyy2eJdKtt3ffGYpHjd1SOQMrJGgF1IIILNmPA8rVW8B1+HP8As2JmityVmC+9Qcp94NTMu4m1kJX0ZZLcHSSPK3iMzKfiBXX8Ctr/APBf/bF/5K8fs9RLvb9POf8AB8sJLjr/AJd/ywcTtbHyfObQxB8FdkHwQgVEbTC2JlnkdraZ3LfHMTV32P0WY+c3xUiYaPmq2kkP7JyjzLHyq/budHWBwlmWLrJR/aS2dr96gjKn6oFdcOPkvXLL+HzPU+r9DhLjwcW/3tqN6Edm9Xs0My2M8jubi1xoi/qlVBHLW/OvLfno/wAEQk0cXVyPNh0YRnKjiSZEfMgFh2WY3XKdONbCFVzeHHRviMHh1kQuZ87oGGYLHDK+YqDcDOqD316XxVgjjCgAAAAWAGgAHAAcq9KUoFKUoFKUoFKUoFKUoK5v7u2MfhXiFhKvaibhZwNATY2VvVPgb8q1f0a7lvPjGOIjKxYN7SK30pQezHpowHrG2h7PENW86q8e1IsHiMUMQxjjldJUkdWEfajSJl6y2RTmjvYkHt1djjeXcDBYxWBhSKQ6iWNVSQHkSQO2PBv8jVMffDaOxQYMdF6VHwgmzlc1vos9mubcj2h3sNa2th8QkihkZXU8GUhgfIjQ10xuDjmRo5UV0YWZWAZT5g1BpnE9Ku0pheFYIUPAhS7D3sSPsVBY/aGNxHz+NmcHioYov7KWU/Cr5tvobQsz4LENDfXq3BdB4K18wHnmqpbT3M2rhtXw4mQfShOf7Ng/2K83LOb9Nj7foOT8Nkk5sbvze39Ou7O3cRgAVw0oCFizRuoZCSACSBZgdBwIq+bH6VojZcXE0Z5ul5E8yAM6/A+dayw0GKlOWLB4hzw0iksPM5bD31LYHcPa05A9HWFT9OV1FvcpZvs1z4/8iXr/AG9vrf8AUZY/kur+0rcuC3jwkoBTEwtm4WkS/la9wfCs70tPbT9oVrzYHQ1hUIkxbtiH4lfUjv5A5m97WPdVW3+3UOIxObZmFDQRoIyYURUzqzZwDdQ5FwCwvqCL3BA9r8xdb6NrHYcqPI8GKkjErlzGyRPGGNgxHZDi9r2z2uTWBtDauMw5yySYeS/ArDJGePP5Zr/VSlEYn4Y4j2Yv2X/10/DLEezF+y/+ulKDN2btLGYonq5cPEFte8DyE68j1yge8Gs5th4hvXx848IkgQfajdvtUpQcndTDsbymaW/ESzyuh84y3Vn9mpDA7OhgGWGKONe5EVB8APCuKUGZSlKBSlKBSlKBSlKBSlKBXBrmlBCz7rYVmLrF1UhNy8LNC5P5RiK5/JrisPGR4rCpnXFdanNZ4lZ/DLJEY/tK1KUEd+GWI9mL9l/9dPwyxHsxfsv/AK6UoA3xxHsxfsv/AK6ktnyY6dc4xGGRTfQYZy3P6RxFvs0pQe8278sgtiMXI8ZPajRUiRh7LEAyZe8BxfgdNKmIsOqqFVQFUAADQADgABwrmlB//9k='></img>
    <div>{props.name}</div>
    </div>
    )
    };
    export default Friends;