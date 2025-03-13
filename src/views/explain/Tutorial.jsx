import React, { useState, useEffect } from 'react';

const Tutorial = () => {
    const [count, setCount] = useState(0);

    // Lifecycle Methods và Hooks
    useEffect(() => {
        // useEffect thay thế các lifecycle methods như componentDidMount, componentDidUpdate, và componentWillUnmount
        console.log('Component mounted or updated');

        // Cleanup function (tương tự componentWillUnmount)
        return () => {
            console.log('Component will unmount');
        };
    }, [count]); // Dependency array: chỉ re-run effect khi `count` thay đổi

    // Hiểu về State và Props
    // State: Là dữ liệu nội bộ của component, có thể thay đổi trong quá trình thực thi.
    // Props: Là dữ liệu được truyền từ component cha xuống component con, và không thể thay đổi bởi component con.
    // Vấn đề: Người mới thường nhầm lẫn giữa state và props, không biết khi nào nên sử dụng state và khi nào nên sử dụng props.

    // Re-rendering và Performance
    // React tự động re-render component khi state hoặc props thay đổi.
    // Nếu không cẩn thận, việc re-render không cần thiết có thể dẫn đến vấn đề về hiệu suất.
    // Giải pháp: Sử dụng React.memo, useMemo, hoặc useCallback để tối ưu hóa hiệu suất.

    // JSX Syntax
    // JSX là cú pháp mở rộng của JavaScript, cho phép viết HTML trong JavaScript.
    // Vấn đề: Người mới thường gặp khó khăn khi làm quen với JSX, đặc biệt là việc sử dụng các biểu thức JavaScript trong JSX.

    // Component Composition và Reusability
    // Component Composition: Là cách xây dựng các component lớn từ các component nhỏ hơn.
    // Reusability: Là khả năng tái sử dụng component trong nhiều phần khác nhau của ứng dụng.
    // Vấn đề: Người mới thường không biết cách chia nhỏ component và tái sử dụng chúng một cách hiệu quả.

    // Routing và State Management
    // Routing: Sử dụng thư viện như react-router-dom để quản lý các route trong ứng dụng.
    // State Management: Sử dụng các thư viện như Redux hoặc Context API để quản lý state toàn cục.
    // Vấn đề: Người mới thường gặp khó khăn khi thiết lập routing và quản lý state toàn cục, đặc biệt là khi ứng dụng phức tạp hơn.

    // Asynchronous Operations
    // Asynchronous Operations: Xử lý các tác vụ bất đồng bộ như gọi API, sử dụng async/await hoặc Promise.
    // Vấn đề: Người mới thường gặp khó khăn khi xử lý các tác vụ bất đồng bộ, đặc biệt là việc quản lý state trong quá trình chờ đợi kết quả từ API.

    return (
        <div>
            <h1>Các vấn đề khi học ReactJS</h1>
            <p>Dưới đây là một số vấn đề phổ biến mà người mới học ReactJS thường gặp phải:</p>

            <ul>
                <li>
                    <strong>Hiểu về State và Props:</strong>
                    <ul>
                        <li>State: Là dữ liệu nội bộ của component, có thể thay đổi trong quá trình thực thi.</li>
                        <li>Props: Là dữ liệu được truyền từ component cha xuống component con, và không thể thay đổi bởi component con.</li>
                        <li>Vấn đề: Người mới thường nhầm lẫn giữa state và props, không biết khi nào nên sử dụng state và khi nào nên sử dụng props.</li>
                    </ul>
                </li>

                <li>
                    <strong>Lifecycle Methods và Hooks:</strong>
                    <ul>
                        <li>Lifecycle Methods: Trong class component, các phương thức như componentDidMount, componentDidUpdate, và componentWillUnmount được sử dụng để quản lý vòng đời của component.</li>
                        <li>Hooks: Trong functional component, useEffect được sử dụng để thay thế các lifecycle methods.</li>
                        <li>Vấn đề: Người mới thường khó hiểu cách sử dụng useEffect và các lifecycle methods, đặc biệt là việc quản lý các side effects và cleanup.</li>
                    </ul>
                </li>

                <li>
                    <strong>Re-rendering và Performance:</strong>
                    <ul>
                        <li>Re-rendering: React tự động re-render component khi state hoặc props thay đổi.</li>
                        <li>Performance: Nếu không cẩn thận, việc re-render không cần thiết có thể dẫn đến vấn đề về hiệu suất.</li>
                        <li>Vấn đề: Người mới thường không biết cách tối ưu hóa hiệu suất, chẳng hạn như sử dụng React.memo, useMemo, hoặc useCallback.</li>
                    </ul>
                </li>

                <li>
                    <strong>JSX Syntax:</strong>
                    <ul>
                        <li>JSX: Là cú pháp mở rộng của JavaScript, cho phép viết HTML trong JavaScript.</li>
                        <li>Vấn đề: Người mới thường gặp khó khăn khi làm quen với JSX, đặc biệt là việc sử dụng các biểu thức JavaScript trong JSX.</li>
                    </ul>
                </li>

                <li>
                    <strong>Component Composition và Reusability:</strong>
                    <ul>
                        <li>Component Composition: Là cách xây dựng các component lớn từ các component nhỏ hơn.</li>
                        <li>Reusability: Là khả năng tái sử dụng component trong nhiều phần khác nhau của ứng dụng.</li>
                        <li>Vấn đề: Người mới thường không biết cách chia nhỏ component và tái sử dụng chúng một cách hiệu quả.</li>
                    </ul>
                </li>

                <li>
                    <strong>Routing và State Management:</strong>
                    <ul>
                        <li>Routing: Sử dụng thư viện như react-router-dom để quản lý các route trong ứng dụng.</li>
                        <li>State Management: Sử dụng các thư viện như Redux hoặc Context API để quản lý state toàn cục.</li>
                        <li>Vấn đề: Người mới thường gặp khó khăn khi thiết lập routing và quản lý state toàn cục, đặc biệt là khi ứng dụng phức tạp hơn.</li>
                    </ul>
                </li>

                <li>
                    <strong>Asynchronous Operations:</strong>
                    <ul>
                        <li>Asynchronous Operations: Xử lý các tác vụ bất đồng bộ như gọi API, sử dụng async/await hoặc Promise.</li>
                        <li>Vấn đề: Người mới thường gặp khó khăn khi xử lý các tác vụ bất đồng bộ, đặc biệt là việc quản lý state trong quá trình chờ đợi kết quả từ API.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Tutorial;