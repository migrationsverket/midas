import{r as m,f as l,j as t}from"./iframe-hven07mH.js";import{S as d}from"./SearchField-B7ncFE0i.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CEB9ZvKa.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CP0dC5bD.js";import"./clsx-B-dksMZM.js";import"./Form-DEztDf84.js";import"./useFocusRing-6_qWLH8D.js";import"./index-CAaUGq6x.js";import"./index-VYEOm2qh.js";import"./Input-DlJaTotj.js";import"./Hidden-bl0dyrpb.js";import"./Button-b_-88Jdv.js";import"./useLabel-3fPS2DpE.js";import"./useLabels-8upbqgKW.js";import"./useButton-Bg6zMZft.js";import"./FieldError-CGNeiPVK.js";import"./Text-BAoIm1rg.js";import"./clsx-Ciqy0D92.js";import"./Text-BkfOg5_y.js";import"./RSPContexts-BL3sWo_M.js";import"./Group-Bas3MU3M.js";import"./useControlledState-_nq-pl6I.js";import"./useLocalizedStringFormatter-DAcMpTAF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BiDsHsN_.js";import"./useField-BkZnRozU.js";import"./TextField.module-DdivwlC8.js";import"./search-JF2kdrnR.js";import"./createLucideIcon-rLeAgfXY.js";import"./x-C-2CBxKx.js";import"./useLocalizedStringFormatter-SJXe37s8.js";import"./Button-CsNSTQ8W.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B42_LAgy.js";import"./Collection-CUMhwKNV.js";import"./index-OuXY1_jV.js";import"./DragAndDrop-mERc7gK1.js";import"./getScrollParent-vliVuo3m.js";import"./scrollIntoView--hYGjISc.js";import"./SelectionIndicator-W2IT6oIH.js";import"./SelectionManager-DwZcMojQ.js";import"./useEvent-BzIwcgMz.js";import"./useDescription-DSRfQAcu.js";import"./inertValue-CudOEv89.js";import"./useHighlightSelectionDescription-DIa-NgbP.js";import"./useUpdateEffect-cUyQzqp4.js";import"./ListKeyboardDelegate-9T6GEUhl.js";import"./useHasTabbableChild-8eIyOZqk.js";import"./Checkbox-Dkyh5Cbn.js";import"./check-gq51SZYJ.js";import"./useToggleState-DZOjdegs.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
