import{r as m,f as l,j as t}from"./iframe-BgrJi1dO.js";import{S as d}from"./SearchField-BpQLC9gG.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dbh12dAG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dbe4V-IB.js";import"./clsx-B-dksMZM.js";import"./Form-BYQG3pHA.js";import"./useFocusRing-BS9YqB89.js";import"./index-CbWpRcM2.js";import"./index-JdhWXOmD.js";import"./Input-DXAbBT3f.js";import"./Hidden-B-ocAKFH.js";import"./Button-CzM4r0Q8.js";import"./useLabel-BAUK-y0z.js";import"./useLabels-AZv-RCl9.js";import"./useButton-CFZUz_m7.js";import"./FieldError-CK0qCQ53.js";import"./Text-BwTtjMDe.js";import"./clsx-Ciqy0D92.js";import"./Text-U40rqCZc.js";import"./RSPContexts-DvRO0UAG.js";import"./Group-Cmswapzf.js";import"./useControlledState-D4OQ_QAh.js";import"./useLocalizedStringFormatter-BqEVaK4W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bc0a0Wov.js";import"./useField-DQisryMe.js";import"./TextField.module-DdivwlC8.js";import"./search-d2uAvpeB.js";import"./createLucideIcon-Xa2G53WL.js";import"./x-DF1DvVFb.js";import"./useLocalizedStringFormatter-C5DL9Vvg.js";import"./Button-B_tSlyMA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BtrvhTUL.js";import"./Collection-B928yBNj.js";import"./index-hMpkQrUO.js";import"./DragAndDrop-D9bWvhRF.js";import"./getScrollParent-D_EmKFyf.js";import"./scrollIntoView-BBkPTMW6.js";import"./SelectionIndicator--LpreWkm.js";import"./SelectionManager-ydqEliBd.js";import"./useEvent-MCxZUdsg.js";import"./useDescription-jfs0LzVP.js";import"./inertValue-hTPLVWAe.js";import"./useHighlightSelectionDescription-M5bvHCnY.js";import"./useUpdateEffect-DbAMDDv6.js";import"./ListKeyboardDelegate-TS4aAaQm.js";import"./useHasTabbableChild-BBHF-kZN.js";import"./Checkbox-l9jmAejL.js";import"./check-BaBKIaX1.js";import"./useToggleState-Ct7i5QmH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
