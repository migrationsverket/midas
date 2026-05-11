import{r as m,f as l,j as t}from"./iframe-DmMjYjLV.js";import{S as d}from"./SearchField-aToBxzZ0.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DgzvELuC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C7Za6cav.js";import"./clsx-B-dksMZM.js";import"./Form-w1xpkiob.js";import"./useFocusRing-DNsXJifB.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./Input-DJHO9EVR.js";import"./Hidden-C30O7ZZj.js";import"./Button-BoGHaXxS.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./FieldError-Dhwy9R14.js";import"./Text-TBh7QsjQ.js";import"./clsx-Ciqy0D92.js";import"./Text-D1BlasEz.js";import"./RSPContexts-CYlpwwtX.js";import"./Group-DApTybdo.js";import"./useControlledState-jKmX6mW8.js";import"./useLocalizedStringFormatter-Df1Z6d6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CEggPbeQ.js";import"./useField-ykwfEeQx.js";import"./TextField.module-DdivwlC8.js";import"./search-CLQqpKCh.js";import"./createLucideIcon-mwlEDpcM.js";import"./x--G2PLC8C.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./Button-Pdwae4O6.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bt6CiHI_.js";import"./Collection-CQwAL6eH.js";import"./index-B_ond3mD.js";import"./DragAndDrop-dG8KulVe.js";import"./getScrollParent-iMMNoEOU.js";import"./scrollIntoView-BJKhh-O-.js";import"./SelectionIndicator-CspuSccB.js";import"./SelectionManager-CQ6A48ag.js";import"./useEvent-be-eSwO4.js";import"./useDescription-2aTt99IB.js";import"./inertValue-sT6DQ-MH.js";import"./useHighlightSelectionDescription-DSvBCQW6.js";import"./useUpdateEffect-8Fq709L1.js";import"./ListKeyboardDelegate-Cgn_BUdj.js";import"./useHasTabbableChild-Ce2yZaJC.js";import"./Checkbox-DsqhFfOW.js";import"./check-Cdg67bgk.js";import"./useToggleState-CBBhVQ_U.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
