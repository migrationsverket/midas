import{r as m,f as l,j as t}from"./iframe-B5fT8W8B.js";import{S as d}from"./SearchField-ddLBffY3.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BBg1MU7F.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bh7KGz6i.js";import"./clsx-B-dksMZM.js";import"./Form-g6SjH7Xy.js";import"./useFocusRing-BgTsLm0m.js";import"./index-CkX7KbtT.js";import"./index-C5IsVOl0.js";import"./Input-Be8NFDJ3.js";import"./Hidden-DB3eEGqq.js";import"./Button-DoDt4li8.js";import"./useLabels-D60PMjBU.js";import"./useButton-CPqG-nUq.js";import"./FieldError-C1zhQcfr.js";import"./Text-DOeKj6x7.js";import"./clsx-Ciqy0D92.js";import"./Text-DNRTdsIF.js";import"./RSPContexts-D1Lpp2lJ.js";import"./Group-DnN7o3-X.js";import"./useControlledState-BGmHapEN.js";import"./useLocalizedStringFormatter-CcytJjyB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CUd_Ep5z.js";import"./useField-BJB193JT.js";import"./TextField.module-DdivwlC8.js";import"./search-BfR0D9Ed.js";import"./createLucideIcon-ChldPQr9.js";import"./x-G9O7KDBX.js";import"./useLocalizedStringFormatter-CVUeiCFD.js";import"./Button-Cbu0zB47.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DiGmQZwe.js";import"./Collection-D0ciEbnT.js";import"./index-XlgYwMjJ.js";import"./DragAndDrop-BjKm31Sf.js";import"./getScrollParent-DN2Ny2rG.js";import"./scrollIntoView-B84U33Mc.js";import"./SelectionIndicator-CF8GTE7k.js";import"./SelectionManager-EQR1HDvb.js";import"./useEvent-DJwUrGHD.js";import"./useDescription-_hkkBgKI.js";import"./inertValue-Bf72JxrP.js";import"./useHighlightSelectionDescription-CeRWqVNv.js";import"./useUpdateEffect-DHcQRt7V.js";import"./ListKeyboardDelegate-BMePGJGy.js";import"./useHasTabbableChild-BEvjVVjB.js";import"./Checkbox-1_mMExaA.js";import"./check-D83D5LGF.js";import"./useToggleState-CW8W4GIh.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
