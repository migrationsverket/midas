import{r as m,f as l,j as t}from"./iframe-BvaNkZ6j.js";import{S as d}from"./SearchField-CyQbPvTJ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BrCoq8dw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-B0rcsDrm.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-jnjho331.js";import"./utils-CNgJIKxW.js";import"./useLocalizedStringFormatter-DRG9aNFD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DTfItN5G.js";import"./useFocusRing-qCtyWvqN.js";import"./index-1t0eXXk7.js";import"./index-CU93jXVK.js";import"./useFormValidation-CFBRBLfT.js";import"./useField-DOL_aQHp.js";import"./Button-DSPwUnGO.js";import"./Hidden-D5Pu3QcA.js";import"./useLabels-COvNNRTy.js";import"./useButton-DkC5W3Ti.js";import"./search-BC9uW93Q.js";import"./createLucideIcon-C_AWNDAW.js";import"./ClearButton-DxCwQf5r.js";import"./Button-BwfGni6y.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B1tb5Rk6.js";import"./VisuallyHidden-QqUieSTF.js";import"./x-DiPLC0FF.js";import"./FieldError-CXm6_yyH.js";import"./Text-YlHeMW3d.js";import"./Text-Bnqxz3nE.js";import"./RSPContexts-DNdoMlvy.js";import"./Collection-D4B2Y49d.js";import"./index-DHzc84gA.js";import"./DragAndDrop-D3dqZEmu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D2ZQPVOX.js";import"./SelectionManager-MKoByHH0.js";import"./useEvent-07YEmXce.js";import"./useDescription-DJyGbkRQ.js";import"./inertValue-qw5HAV2a.js";import"./useHighlightSelectionDescription-BnO6A_tG.js";import"./useUpdateEffect-DwwYt57Q.js";import"./ListKeyboardDelegate-B2dZEP_i.js";import"./useHasTabbableChild-BaRsMGYR.js";import"./Checkbox-Crba1vwU.js";import"./Form-ctSkFViV.js";import"./check-vVM56i8G.js";import"./useToggleState-DYa1opoc.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
