import{r as m,f as l,j as t}from"./iframe-BuuAXrXC.js";import{S as d}from"./SearchField-DMM5eT5u.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BomGIE_p.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtsDHbZe.js";import"./clsx-B-dksMZM.js";import"./Form-Dh-jyLTL.js";import"./useFocusRing-CrOe_O8c.js";import"./index-BbfDc97u.js";import"./index-32pD7yrL.js";import"./Input-BPxgunFy.js";import"./Hidden-E4h0Oh4e.js";import"./Button-DvBK65Gf.js";import"./useLabels-CGKYF4iS.js";import"./useButton-BnwORE09.js";import"./FieldError-EC843UUw.js";import"./Text-6_usI8rI.js";import"./clsx-Ciqy0D92.js";import"./Text-ri3V3kO7.js";import"./RSPContexts-GYXhZ2kG.js";import"./Group-Co9hcU3l.js";import"./useControlledState-jhkXU9fd.js";import"./useLocalizedStringFormatter-BEGIzj17.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D6jbbMzu.js";import"./useField-DDR_miEa.js";import"./TextField.module-DdivwlC8.js";import"./search-BEd-jznx.js";import"./createLucideIcon-iyjQV_Z5.js";import"./x-Dbf8QEqu.js";import"./useLocalizedStringFormatter-B4LAAnFe.js";import"./Button-DGWTIzH5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-6El7FPtm.js";import"./Collection-B0Hs1IvJ.js";import"./index-a9F44m-_.js";import"./DragAndDrop-De7XwIY3.js";import"./getScrollParent-CUa_lcZe.js";import"./scrollIntoView-BPvWn1k3.js";import"./SelectionIndicator-ClskVgwB.js";import"./SelectionManager-BdqnjQ-I.js";import"./useEvent-CPDI-Sn6.js";import"./useDescription-DdQEt6e5.js";import"./inertValue-dfAk2j5D.js";import"./useHighlightSelectionDescription-CDoxptns.js";import"./useUpdateEffect-CxsANN4V.js";import"./ListKeyboardDelegate-BYIOwBbd.js";import"./useHasTabbableChild-BdIQQQ4I.js";import"./Checkbox-CDNheLFf.js";import"./check-DJ92GzTo.js";import"./useToggleState-DUTEWacV.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
