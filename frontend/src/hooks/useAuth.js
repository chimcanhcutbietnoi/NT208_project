import { useState, createContext, useContext } from 'react';
import * as userService from '../services/userService';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const login = async (email, password) => {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      toast.success('Đăng nhập thành công');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const register = async data => {
    try {
      const user = await userService.register(data);
      setUser(user);
      toast.success('Đăng kí thành công');
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const logout = () => {
    userService.logout();
    setUser(null);
    toast.success('Đăng xuất thành công');
  };

  const updateProfile = async user => {
    const updatedUser = await userService.updateProfile(user);
    toast.success('Thông tin của bạn đã được cập nhật');
    if (updatedUser) setUser(updatedUser);
  };

  const changePassword = async passwords => {
    await userService.changePassword(passwords);
    logout();
    toast.success('Mật khẩu đã được thay đổi, vui lòng đăng nhập lại!');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
