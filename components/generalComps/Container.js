const Container = ({ children, className }) => {
    return (
        <div className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-4 ${className ?? className}`}>{children}</div>
    )
}

export default Container