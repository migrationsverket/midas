import{r as m,f as l,j as t}from"./iframe-ClA4Jp0w.js";import{S as d}from"./SearchField-bWsKG3U3.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BAstB16p.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D0z16UKm.js";import"./clsx-B-dksMZM.js";import"./Form-p39JobxH.js";import"./useFocusRing-CH7YMdaA.js";import"./index-bNRMcRC-.js";import"./index-B9CA3Byf.js";import"./Input-BxL51vTT.js";import"./Hidden-BjxHpkJU.js";import"./Button-lxcybUX-.js";import"./useLabels-l7dZfeia.js";import"./useButton-Dq5YitBv.js";import"./FieldError-CCOnpqUO.js";import"./Text-BOHdvQkr.js";import"./clsx-Ciqy0D92.js";import"./Text-BtZnFY82.js";import"./RSPContexts-iTkphylR.js";import"./Group-DyokFXca.js";import"./useControlledState-BVmLEOQ4.js";import"./useLocalizedStringFormatter-LKr8XwmM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-yXbrOEp9.js";import"./useField-AXva_Uzh.js";import"./TextField.module-DdivwlC8.js";import"./search-CtZ5GUCh.js";import"./createLucideIcon-nVFpiFPl.js";import"./x-DBneEqd2.js";import"./useLocalizedStringFormatter-f9qOXevm.js";import"./Button-D3i3Yqak.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dka0OyWW.js";import"./Collection-zeuyxdbY.js";import"./index-BxB41E7R.js";import"./DragAndDrop-BLHLddgn.js";import"./getScrollParent-DQC80py1.js";import"./scrollIntoView-pB7m18ZN.js";import"./SelectionIndicator-ODji40oL.js";import"./SelectionManager-C8mEc_pZ.js";import"./useEvent-YydGr1-7.js";import"./useDescription-iMciGuDR.js";import"./inertValue-C6exdOew.js";import"./useHighlightSelectionDescription-CODe00zp.js";import"./useUpdateEffect-Cy7t0KC-.js";import"./ListKeyboardDelegate-CmGxp_4O.js";import"./useHasTabbableChild-jmqgu2Do.js";import"./Checkbox-CIleHH8E.js";import"./check-DXe4Zrii.js";import"./useToggleState-DfOXrnMn.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
