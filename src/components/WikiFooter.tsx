const WikiFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            This page was last edited on {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}.
          </p>
          <p>
            Text is available under the{" "}
            <a href="#" className="hover:underline">
              Creative Commons Attribution-ShareAlike License
            </a>
            ; additional terms may apply.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">About CSPedia</a>
            <a href="#" className="hover:underline">Disclaimers</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WikiFooter;
