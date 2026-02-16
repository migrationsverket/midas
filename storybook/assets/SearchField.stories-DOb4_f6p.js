import{r as m,f as l,j as t}from"./iframe-DB1fQkim.js";import{S as d}from"./SearchField-C199vCrY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-T49UC3K6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BGJ8Svio.js";import"./utils-rcw9EHco.js";import"./useLocalizedStringFormatter-boXa-JbY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BX9BOpAt.js";import"./useFocusRing-BqzMj4PE.js";import"./index-Bt17hO8v.js";import"./index-AryLyPHF.js";import"./useFormValidation-BzsRUDrO.js";import"./useField-C1-CT7Bj.js";import"./Button-CfOPYvMd.js";import"./Hidden-DL23eUkw.js";import"./useLabels-eN3v5AUZ.js";import"./useButton-De_mFC-y.js";import"./search-BcMe-GIZ.js";import"./createLucideIcon-BkMAC4LJ.js";import"./ClearButton-ChFKdyST.js";import"./Button-q_lSiE8f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-5j4HyRnM.js";import"./VisuallyHidden-kOOindq1.js";import"./x-Vxu3CVhu.js";import"./FieldError-B9rnBVQS.js";import"./Text-fvBQwzot.js";import"./Text-Hm2BWrds.js";import"./RSPContexts-BJrSYr0Z.js";import"./Collection-DzJxdVpc.js";import"./index-BKfnPzb7.js";import"./DragAndDrop-BUIxjb7D.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Btb-iVUx.js";import"./SelectionManager-BLyrVyiQ.js";import"./useEvent-Cy_tRzK_.js";import"./useDescription-Vm0yjvuZ.js";import"./inertValue-CMIzz-fp.js";import"./useHighlightSelectionDescription-DYx5M7gk.js";import"./useUpdateEffect-BUHjDH28.js";import"./ListKeyboardDelegate-CN8wZZsU.js";import"./useHasTabbableChild-BD_huaOD.js";import"./Checkbox-BPp5R92P.js";import"./Form-CfjHafmL.js";import"./check-Dk0gUhay.js";import"./useToggleState-ZF-jqHCi.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
