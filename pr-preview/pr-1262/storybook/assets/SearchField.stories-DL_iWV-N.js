import{r as m,f as l,j as t}from"./iframe-_Hk9HBhX.js";import{S as d}from"./SearchField-XvryWI7U.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-8BYWsEbY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Tr1wzETD.js";import"./clsx-B-dksMZM.js";import"./Form-CJTM5oJs.js";import"./useFocusRing-CUpBT6GV.js";import"./index-fEZrWfc8.js";import"./index-Cjzv3PRo.js";import"./Input-BnOd_loK.js";import"./Hidden-vPthIoGd.js";import"./Button-BcVwX6wB.js";import"./useLabel-CG8Xm4bD.js";import"./useLabels-XRHHudnr.js";import"./useButton-CZkGYXOZ.js";import"./FieldError-BnqaSw3Q.js";import"./Text-CFXOaGuN.js";import"./clsx-Ciqy0D92.js";import"./Text-4AExYRWh.js";import"./RSPContexts-BkY4NJgN.js";import"./Group-DhBe_ig_.js";import"./useControlledState-CXVEjKuF.js";import"./useLocalizedStringFormatter-xIKmWIeo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D8pq1Yhc.js";import"./useField-JEZIk8ke.js";import"./TextField.module-DdivwlC8.js";import"./search-Dzivk3PC.js";import"./createLucideIcon-qIP4byR5.js";import"./x-3memj5xE.js";import"./useLocalizedStringFormatter-DUwGsNzO.js";import"./Button-BPI35lWH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CE55BuvM.js";import"./Collection-38fQTHAm.js";import"./index-D0DH_Og7.js";import"./DragAndDrop-BkZbnh7V.js";import"./getScrollParent-arYGATXV.js";import"./scrollIntoView-DeSIzk3n.js";import"./SelectionIndicator-BOwLDBzR.js";import"./SelectionManager-CHKeKSA7.js";import"./useEvent-BoXIj02p.js";import"./useDescription-Br1cNKJN.js";import"./inertValue-Nj7XzT2_.js";import"./useHighlightSelectionDescription-Bqanswuw.js";import"./useUpdateEffect-BotRKgqK.js";import"./ListKeyboardDelegate-CTPIAQRz.js";import"./useHasTabbableChild-DN8lqkd0.js";import"./Checkbox-C0KZoCr8.js";import"./check-D8LrGIdX.js";import"./useToggleState-CMh-QzHR.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
