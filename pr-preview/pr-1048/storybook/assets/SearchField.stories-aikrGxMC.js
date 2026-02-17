import{r as m,f as l,j as t}from"./iframe-CtFwdAsv.js";import{S as d}from"./SearchField-9b6nrl9U.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ZOmMHK-z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CWjJjGF9.js";import"./utils-v3QsXCFb.js";import"./useLocalizedStringFormatter-BBunPQfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSI2cFpL.js";import"./useFocusRing-4dXyLk97.js";import"./index-CC8QKcxH.js";import"./index-B04nzdf1.js";import"./useFormValidation-B9JoZcd_.js";import"./useField-C2a_Lo9C.js";import"./Button-Dsas9bQI.js";import"./Hidden-DVSOiNkA.js";import"./number-DfkVkf0F.js";import"./useLabels-Ot2JOOvi.js";import"./useButton-pKf2Kj0y.js";import"./search-BmeFd1i8.js";import"./createLucideIcon-DtbaAKiS.js";import"./ClearButton-BRKAUnVX.js";import"./Button-zyqmdcUk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNQKoGb.js";import"./VisuallyHidden-rVLj1Hba.js";import"./x-CZS7rfMM.js";import"./FieldError-rC39neWl.js";import"./Text-DLLk5-WP.js";import"./Text-CbKa99gG.js";import"./RSPContexts-0m4AhG_r.js";import"./Collection-ClpHBUlT.js";import"./index-Cl36apJ0.js";import"./DragAndDrop-CxoAvxSN.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CGJoHFxL.js";import"./SelectionManager-BYG4l7zL.js";import"./useEvent-cGdcjq2p.js";import"./useDescription-ByveFpkP.js";import"./inertValue-DtuX4sgn.js";import"./useHighlightSelectionDescription-qKTxiIey.js";import"./useUpdateEffect-wIHcDazw.js";import"./ListKeyboardDelegate-CIuyyYw2.js";import"./useHasTabbableChild-C45Mp1fW.js";import"./Checkbox-HMXMyHYV.js";import"./Form-yWD9DB3c.js";import"./check-G9qeHkPt.js";import"./useToggleState-CFzrgmFZ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
