📱 Responsive Design in React Native using "react-native-size-matters"

📘 Basic Usage
You can import and use three core functions in your styles:
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

These functions adjust your layout based on screen dimensions:

📐 Quick Reference Table
| **CSS Property** | **Function to Use** |
| ------------------- | ------------------- |
| `marginTop` | `verticalScale()` |
| `marginBottom` | `verticalScale()` |
| `marginLeft` | `scale()` |
| `marginRight` | `scale()` |
| `paddingTop` | `verticalScale()` |
| `paddingBottom` | `verticalScale()` |
| `paddingLeft` | `scale()` |
| `paddingRight` | `scale()` |
| `height` | `verticalScale()` |
| `width` | `scale()` |
| `borderTopWidth` | `verticalScale()` |
| `borderBottomWidth` | `verticalScale()` |
| `borderLeftWidth` | `scale()` |
| `borderRightWidth` | `scale()` |
| `borderRadius` | `moderateScale()` |
| `fontSize` | `moderateScale()` |
| `lineHeight` | `moderateScale()` |
| `letterSpacing` | `moderateScale()` |
| `iconSize` | `moderateScale()` |

📊 Common Use Cases
| Property | Function to Use | Why |
| -------------- | -------------------- | ---------------------------------- |
| `padding` | `scale(16)` | Applies horizontally/overall |
| `paddingTop` | `verticalScale(12)` | Affects vertical space |
| `marginTop` | `verticalScale(20)` | Vertical distance |
| `marginLeft` | `scale(10)` | Horizontal spacing |
| `fontSize` | `moderateScale(16)` | Keeps font readable on all screens |
| `width` | `scale(200)` | Horizontal dimension |
| `height` | `verticalScale(100)` | Vertical dimension |
| `borderRadius` | `moderateScale(8)` | Affects corner rounding |

📌 Choosing the Right Function
| Purpose | Use | Example |
| ------------------- | ----------------- | ---------------------------------------- |
| Horizontal spacing | `scale()` | `marginLeft`, `padding`, `width` |
| Vertical spacing | `verticalScale()` | `marginTop`, `height`, `paddingVertical` |
| Font size / balance | `moderateScale()` | `fontSize`, `borderRadius` |

✅ Final Tip
Use these scaling functions only where necessary. Don’t blindly wrap every style value — use scale helpers in areas that impact layout on different screen sizes.
