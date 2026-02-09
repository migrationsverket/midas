import{r as m,f as l,j as t}from"./iframe-DOXdiU66.js";import{S as d}from"./SearchField-DBs_RuEX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-VqlBnuE3.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJroEoWv.js";import"./utils-CmnmUlXv.js";import"./useLocalizedStringFormatter-CWz_tyHY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DRBZq_2S.js";import"./useFocusRing-DmwdXSTO.js";import"./index-ClfAcbiY.js";import"./index-BXbJVeS4.js";import"./useFormValidation-DEhwRD6x.js";import"./useField-ByAKI2BZ.js";import"./Button-DcU_sKA3.js";import"./Hidden-TB3BoZiq.js";import"./useLabels-j-fCOdoN.js";import"./useButton-BADRSzES.js";import"./search-CprYf_Q8.js";import"./createLucideIcon-CTd9hGNC.js";import"./ClearButton-BJtRJ4Yb.js";import"./Button-CXH-q602.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DslrlAyz.js";import"./VisuallyHidden-1ky1b9n5.js";import"./x-CAiuwumR.js";import"./FieldError-DkJbgax8.js";import"./Text-gQE2jOxd.js";import"./Text-O51bLbCJ.js";import"./RSPContexts-DC30gU2X.js";import"./Collection-BIazFUA_.js";import"./index-CXkiP9a7.js";import"./DragAndDrop-CWEYi3Tk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ClV0_nCJ.js";import"./SelectionManager-CXFNo1_J.js";import"./useEvent-D7Unhy1s.js";import"./useDescription-Czop0qa_.js";import"./inertValue-BvT6QOM7.js";import"./useHighlightSelectionDescription-BjpvmL7D.js";import"./useUpdateEffect-BmCQhS4v.js";import"./ListKeyboardDelegate-aan13HZ9.js";import"./useHasTabbableChild-BYprhY_O.js";import"./Checkbox-CeJuShb0.js";import"./Form-B7uuhRnR.js";import"./check-D0x2IrBA.js";import"./useToggleState-BvGXKYbF.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
