import{r as m,f as l,j as t}from"./iframe-CuHS7f-D.js";import{S as d}from"./SearchField-BnkpoZS-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-csvMRujt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BFq6s5qx.js";import"./clsx-B-dksMZM.js";import"./Form-KXBu28U1.js";import"./useFocusRing-c3yj8psb.js";import"./index-CUpZ4Q1o.js";import"./index-DHblwsjT.js";import"./Input-qYlI4fVr.js";import"./Hidden-DQfRALgS.js";import"./Button-BHwczPOP.js";import"./useLabel-CUA0N587.js";import"./useLabels-D2MJHSWT.js";import"./useButton-DWFuO5be.js";import"./FieldError-DWjsvXUz.js";import"./Text-wtPwzvaL.js";import"./clsx-Ciqy0D92.js";import"./Text-Suqt0mTK.js";import"./RSPContexts-CmGu2gwM.js";import"./Group-BFyk5cnr.js";import"./useControlledState-Kxt6bXWr.js";import"./useLocalizedStringFormatter-MxafZpyg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CwzW4wa_.js";import"./useField-CrVq981-.js";import"./TextField.module-DdivwlC8.js";import"./search-wVEnZZxy.js";import"./createLucideIcon-WRij3kcs.js";import"./x-9kI0zPFb.js";import"./useLocalizedStringFormatter-D8LlPcXB.js";import"./Button-CT4-7PnM.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-sy5lx_M_.js";import"./Collection-97NF7Jpt.js";import"./index-dpH9gAkX.js";import"./DragAndDrop-CikjYEiO.js";import"./getScrollParent-C0O747nR.js";import"./scrollIntoView-CFWK3f8m.js";import"./SelectionIndicator-Cn5dTTdW.js";import"./SelectionManager-vmbqVhp5.js";import"./useEvent-BpJPF1H-.js";import"./useDescription-UP5fy7je.js";import"./inertValue-BlbCzxUR.js";import"./useHighlightSelectionDescription-WZbk73HD.js";import"./useUpdateEffect-DgHfrstL.js";import"./ListKeyboardDelegate-BEhrGyqr.js";import"./useHasTabbableChild-Cgo-noKj.js";import"./Checkbox-_bLZhC6H.js";import"./check-CQj7NPv6.js";import"./useToggleState-Cp6sVs7l.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
