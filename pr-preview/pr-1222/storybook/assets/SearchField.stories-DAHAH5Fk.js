import{r as m,f as l,j as t}from"./iframe-CgWG_iU2.js";import{S as d}from"./SearchField-C6bLVXcX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dhai_U0J.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-_M8wNiGT.js";import"./clsx-B-dksMZM.js";import"./Form-CrH2ZpvP.js";import"./useFocusRing-Dsycni8a.js";import"./index-DxbG3zi7.js";import"./index-BG0K86OR.js";import"./Input-RxD5CMUw.js";import"./Hidden-D3aMc9rP.js";import"./Button-ByOlI6-C.js";import"./useLabel-DU9qnLW0.js";import"./useLabels-D66rAip6.js";import"./useButton-CtVOG2X0.js";import"./FieldError-D-IJ4T5L.js";import"./Text-Dj7d9dGS.js";import"./clsx-Ciqy0D92.js";import"./Text-dFUGDIq7.js";import"./RSPContexts-Bs45BnO9.js";import"./Group-C-cJ-Nhy.js";import"./useControlledState-BM6BESXh.js";import"./useLocalizedStringFormatter-BQ-Yoit3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C28V9mVK.js";import"./useField-s0ioTJPg.js";import"./TextField.module-DdivwlC8.js";import"./search-D4qW24VA.js";import"./createLucideIcon-DjCctUN5.js";import"./x-Dv2iooYO.js";import"./useLocalizedStringFormatter-Bvq7R4Wr.js";import"./Button-nHuGQ5i0.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-oanLmiAX.js";import"./Collection-BcC6_I8T.js";import"./index-Dn0BG2yc.js";import"./DragAndDrop-8SYpID_Q.js";import"./getScrollParent-DZ0TSZLG.js";import"./scrollIntoView-CqQuMmwT.js";import"./SelectionIndicator-C0agU0dY.js";import"./SelectionManager-CTT6WwYs.js";import"./useEvent-FPbp72qp.js";import"./useDescription-CpHd73jI.js";import"./inertValue-qascYWS8.js";import"./useHighlightSelectionDescription-CWAW9roR.js";import"./useUpdateEffect-Dx_OmGO6.js";import"./ListKeyboardDelegate-DqqiQJTe.js";import"./useHasTabbableChild-CfVJvp1m.js";import"./Checkbox-Bme3IuLn.js";import"./check-ECiiDiS4.js";import"./useToggleState-CEAqyIrS.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
