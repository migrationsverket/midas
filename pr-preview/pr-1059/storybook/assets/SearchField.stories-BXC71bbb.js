import{r as m,f as l,j as t}from"./iframe-DvdASj8M.js";import{S as d}from"./SearchField-FRIOvM-O.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C1TDVIKt.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BTi70xM1.js";import"./utils-2bkJAsr0.js";import"./useLocalizedStringFormatter-yjXDy8l0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D_V2Ueh7.js";import"./useFocusRing-BaJY9r_4.js";import"./index-CQ_pr3hm.js";import"./index-CcYTU2s7.js";import"./useFormValidation-BjECE3Vg.js";import"./useField-9ykgCi-4.js";import"./Button-Ziwvh2At.js";import"./Hidden-9BXFjXWH.js";import"./useLabels-BdcIIg7x.js";import"./useButton-BEZYe4nN.js";import"./search-CvzMCjxH.js";import"./createLucideIcon-6vu73fXR.js";import"./ClearButton-wa9JQpvH.js";import"./Button-eMwP9vIv.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9OuGGhbc.js";import"./VisuallyHidden-bdeVna33.js";import"./x-CIUdYWTM.js";import"./FieldError-BHomaXXv.js";import"./Text-HREkQCRS.js";import"./Text-DUdz_YCU.js";import"./RSPContexts-KaeisNYM.js";import"./Collection-BPPX9AyK.js";import"./index-3FXGvnxL.js";import"./DragAndDrop-Bn_erqsb.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfYwX-3g.js";import"./SelectionManager-CB0MSLoI.js";import"./useEvent-CdPSZ4wH.js";import"./useDescription-DEfag5zN.js";import"./inertValue-Zj9TAh3k.js";import"./useHighlightSelectionDescription-Dm-F_WZv.js";import"./useUpdateEffect-OELumoLI.js";import"./ListKeyboardDelegate-n2f3KV6i.js";import"./useHasTabbableChild-CEUlOb2H.js";import"./Checkbox-D_xFGZLE.js";import"./Form-Bzu484ao.js";import"./check-eswNHidx.js";import"./useToggleState-MlQPG4CY.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
