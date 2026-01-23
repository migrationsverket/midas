import{r as m,f as l,j as t}from"./iframe-c0NZLqxB.js";import{S as d}from"./SearchField-DFBWQ5ui.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CEUs2T_I.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjKcVj6X.js";import"./utils-BKgH2Y_x.js";import"./useLocalizedStringFormatter-Dj8f67Lw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-vi61ycAX.js";import"./useFocusRing-Cj5nDXBG.js";import"./index-BMKVxsa8.js";import"./index-CyIR4htQ.js";import"./useFormValidation-ByN0j24V.js";import"./useField-DuMvas_e.js";import"./Button-C5Y3_RdN.js";import"./Hidden-W2Z4Qx3q.js";import"./useLabels-CZwsnZ3A.js";import"./useButton-Cfwxxq9B.js";import"./search-BgIMct-F.js";import"./createLucideIcon-D4UmvVly.js";import"./ClearButton-DS9BEXNp.js";import"./Button-DIihlZQ1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXAkg84e.js";import"./VisuallyHidden-fZjjLnAV.js";import"./x-dOsKZ8lh.js";import"./FieldError-DmTPwkC8.js";import"./Text-INM5RJTT.js";import"./Text-CHKa0TSz.js";import"./RSPContexts-RKVSLPs0.js";import"./Collection-pg0lVI6R.js";import"./index-BCNfX8V_.js";import"./DragAndDrop-CPS1D7vd.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DCSorE7A.js";import"./SelectionManager-BxRgTcFy.js";import"./useEvent-DhmWtasD.js";import"./useDescription-Db-kOIhF.js";import"./inertValue-Be7E9-2A.js";import"./useHighlightSelectionDescription-DW7RqFCI.js";import"./useUpdateEffect-DGO1fVJ4.js";import"./ListKeyboardDelegate-BFnCDYdf.js";import"./useHasTabbableChild-D_b7bXJW.js";import"./Checkbox-QMnW5x9N.js";import"./Form-CuG83Arz.js";import"./check-D-Wilsb4.js";import"./useToggleState-DOpAkxiL.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
