import{r as m,f as l,j as t}from"./iframe-BMI9LcwD.js";import{S as d}from"./SearchField-C7S78xlB.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-eZdrHsRy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DULbg8rB.js";import"./utils-CUKuiloA.js";import"./useLocalizedStringFormatter-BGq9CHdg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-WEoR-zcU.js";import"./useFocusRing-DwyCmeGr.js";import"./index-fsqC8uXs.js";import"./index-CWh_0PxX.js";import"./useFormValidation-DnRBQ596.js";import"./useField-DH6BC-q1.js";import"./Button-Czr2XHcN.js";import"./Hidden-DWYxNcIi.js";import"./useLabels-ipZVyWiu.js";import"./useButton-BpdaM1mY.js";import"./search-Bg7fQGX_.js";import"./createLucideIcon-BUDo9TFX.js";import"./ClearButton-Ca88v--o.js";import"./Button-k6WQaZpy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzttMcKh.js";import"./VisuallyHidden-CqjPFeZK.js";import"./x-HbCAtCPY.js";import"./FieldError-Bn65JKdh.js";import"./Text-IBNi6CET.js";import"./Text-Cp8-jRoc.js";import"./RSPContexts-CxOtl2I6.js";import"./Collection-C9qQT55G.js";import"./index-DQGXGJO2.js";import"./DragAndDrop-CB6sMOse.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Vv5l6iKe.js";import"./SelectionManager-BW1J4nQm.js";import"./useEvent-Cmtr8QN3.js";import"./useDescription-DUAcqLRU.js";import"./inertValue-P1WOIA8Y.js";import"./useHighlightSelectionDescription-CyLRfMOv.js";import"./useUpdateEffect-D5RlGeze.js";import"./ListKeyboardDelegate-5qCRRvR5.js";import"./useHasTabbableChild-DcQcG3WI.js";import"./Checkbox-CBV--SZm.js";import"./Form-Bs26BAsB.js";import"./check-CgLsZ_YW.js";import"./useToggleState-DRb0D5C2.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
