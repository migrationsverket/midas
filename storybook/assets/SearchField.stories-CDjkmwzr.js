import{r as m,f as l,j as t}from"./iframe-Co0SsNj6.js";import{S as d}from"./SearchField-DHHoBZ8j.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BzUgNFLU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CAAFyILJ.js";import"./utils-DoIZJ7cj.js";import"./useLocalizedStringFormatter-BcSWiZ19.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgD0NSef.js";import"./useFocusRing-9k5ozzKg.js";import"./index-D1rsIpeY.js";import"./index-DMENUWva.js";import"./useFormValidation-DXVxdhpA.js";import"./useField-C47SklL7.js";import"./Button-0-4Kgh6r.js";import"./Hidden-CossIpZl.js";import"./useLabels-LGizr97P.js";import"./useButton-Cob-AGV8.js";import"./search-CL_Pq8Kn.js";import"./createLucideIcon-groEP49X.js";import"./ClearButton--YKhL5_g.js";import"./Button-6Dau2X37.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cc2vZIqX.js";import"./VisuallyHidden-m5iKMMV5.js";import"./x-DSoxV8Ho.js";import"./FieldError-BD2HEwuR.js";import"./Text-4sNYTzks.js";import"./Text-BSTUUX0z.js";import"./RSPContexts-CrZ3ys4B.js";import"./Collection-C0IDLnfh.js";import"./index-D0DFVPuZ.js";import"./DragAndDrop-BTPt1dRB.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CF_YgRba.js";import"./SelectionManager-BMm7iJXk.js";import"./useEvent-DRV4VT7N.js";import"./useDescription-BDzmu5j_.js";import"./inertValue-ByRg6RAT.js";import"./useHighlightSelectionDescription-BHrLbz_O.js";import"./useUpdateEffect--eESCmAS.js";import"./ListKeyboardDelegate-C4U2P3XN.js";import"./useHasTabbableChild-Cumk4YpR.js";import"./Checkbox-Bjy8dj4u.js";import"./Form-BKJfkX3I.js";import"./check-DLefdGke.js";import"./useToggleState-CO3ibt5X.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
