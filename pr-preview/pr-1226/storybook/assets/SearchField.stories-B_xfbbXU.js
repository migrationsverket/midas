import{r as m,f as l,j as t}from"./iframe-BspZq9tj.js";import{S as d}from"./SearchField-B9-JNmei.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUm_tE-5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DAmpme0n.js";import"./clsx-B-dksMZM.js";import"./Form-D4R1YekT.js";import"./useFocusRing-ZSLB6af2.js";import"./index-CNFgOk2C.js";import"./index-CYPXKPzf.js";import"./Input-BA9l2p_L.js";import"./Hidden-BxNHn6hu.js";import"./Button-W6h6LqJQ.js";import"./useLabel-SKuz0xAF.js";import"./useLabels-DTPL2hi6.js";import"./useButton-Du_s3oIP.js";import"./FieldError-CWZFsZje.js";import"./Text-DJFK0YJf.js";import"./clsx-Ciqy0D92.js";import"./Text-D4utVkCo.js";import"./RSPContexts-CPwEBVvI.js";import"./Group-C5bte03E.js";import"./useControlledState-BFbpEbwN.js";import"./useLocalizedStringFormatter-Cea7ejb5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CWwIEGt6.js";import"./useField-DEHFco72.js";import"./TextField.module-DdivwlC8.js";import"./search-Dshgdf8X.js";import"./createLucideIcon-DZ4T53Ud.js";import"./x-B87ahrOa.js";import"./useLocalizedStringFormatter-CSYYDYLy.js";import"./Button-CgVYtA8O.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-mXHZbk3a.js";import"./Collection-UMJcuUuS.js";import"./index-CgOuGLE0.js";import"./DragAndDrop-r2GZgzv-.js";import"./getScrollParent-DmWmoZNO.js";import"./scrollIntoView-BoOeRgl-.js";import"./SelectionIndicator-C4bCSSqv.js";import"./SelectionManager-Dtp9ZmKg.js";import"./useEvent-SgyYcF3m.js";import"./useDescription-D5AIqWjS.js";import"./inertValue-BRiM1TNb.js";import"./useHighlightSelectionDescription-CVBSOkcG.js";import"./useUpdateEffect-DaxejOY1.js";import"./ListKeyboardDelegate-DWzGTbDd.js";import"./useHasTabbableChild-CuBsOdph.js";import"./Checkbox-C2IUrYDC.js";import"./check-D1tTfe8G.js";import"./useToggleState-CHaywwKF.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
