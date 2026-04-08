import{r as m,f as l,j as t}from"./iframe-CEYCzj7u.js";import{S as d}from"./SearchField-BVow0xMK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CrgKyz4x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-AQIE0kDv.js";import"./clsx-B-dksMZM.js";import"./Form-C-hDIK2G.js";import"./useFocusRing-Dp-W9h8R.js";import"./index-BT04Vy5P.js";import"./index-BaKsLBWM.js";import"./Input-DLHz4SZ9.js";import"./Hidden-BwxAj0d8.js";import"./Button-C7JuJvDF.js";import"./useLabel-BMWHmK7D.js";import"./useLabels-BdGOjTVQ.js";import"./useButton-15OKOO7P.js";import"./FieldError-BW7B152f.js";import"./Text-BtotI6hp.js";import"./clsx-Ciqy0D92.js";import"./Text-BKjU8N6L.js";import"./RSPContexts-vK1IDStc.js";import"./Group-CGDtkb1O.js";import"./useControlledState-BgNKedVs.js";import"./useLocalizedStringFormatter-DsBO9UZN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CLrsVGLU.js";import"./useField-hWGv7I8v.js";import"./TextField.module-DdivwlC8.js";import"./search-yNMSv6D2.js";import"./createLucideIcon-Djfjk74V.js";import"./x-ubboyZZG.js";import"./useLocalizedStringFormatter-B6vMXcu5.js";import"./Button-DjNzlNeH.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B3AOW4Om.js";import"./Collection-C16s-VZy.js";import"./index-BY5MwQGH.js";import"./DragAndDrop-ehTtPCzD.js";import"./getScrollParent-DNFkay4Z.js";import"./scrollIntoView-BCOX-ymx.js";import"./SelectionIndicator-6aWYUD_t.js";import"./SelectionManager-G6B6xgaW.js";import"./useEvent-B9xcl8_k.js";import"./useDescription-7tiDq9ws.js";import"./inertValue-CoeXxRbD.js";import"./useHighlightSelectionDescription-BERhzC1y.js";import"./useUpdateEffect-B0ts-m9F.js";import"./ListKeyboardDelegate-BNrqLeaN.js";import"./useHasTabbableChild-BljZk98A.js";import"./Checkbox-DfzB48nQ.js";import"./check-BUrzU88v.js";import"./useToggleState-Dj2ZB4Qc.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
