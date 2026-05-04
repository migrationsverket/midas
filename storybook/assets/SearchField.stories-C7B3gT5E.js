import{r as m,f as l,j as t}from"./iframe-y_ZEGYiJ.js";import{S as d}from"./SearchField-B7EwTVkX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DzjqdIio.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-8dWn79IV.js";import"./clsx-B-dksMZM.js";import"./Form-jkhfJmW6.js";import"./useFocusRing-CZ7WfYYW.js";import"./index-DK6J5I5t.js";import"./index-C3AD5J6I.js";import"./Input-Bm-PfLto.js";import"./Hidden-Cu8enaQS.js";import"./Button-Ch-G3kN7.js";import"./useLabel-CNEaWGvD.js";import"./useLabels-JqoH3_Oa.js";import"./useButton-gC0Ivgyp.js";import"./FieldError-DVm8G2oT.js";import"./Text-D9z2hAIA.js";import"./clsx-Ciqy0D92.js";import"./Text-B7AL5jZC.js";import"./RSPContexts-DqgeagmW.js";import"./Group-DSFwtZNb.js";import"./useControlledState-DHT9vmuC.js";import"./useLocalizedStringFormatter-lMWk04dJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPApV7cm.js";import"./useField-hpR3LKjK.js";import"./TextField.module-DdivwlC8.js";import"./search-C7NIp0Xv.js";import"./createLucideIcon-BSy6nR5q.js";import"./x-DyC_Bfvk.js";import"./useLocalizedStringFormatter-DZmDvz9-.js";import"./Button-DfIwZ4Yr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CIMmvdq0.js";import"./Collection-CENpgFH3.js";import"./index-5hSl8Kfz.js";import"./DragAndDrop-DAVhR5aE.js";import"./getScrollParent-vEn_skDo.js";import"./scrollIntoView-Dr9gm-NQ.js";import"./SelectionIndicator-PYyRf_UG.js";import"./SelectionManager-CF_UqROg.js";import"./useEvent-Cdh_4pNz.js";import"./useDescription-ZoeRT3XG.js";import"./inertValue-DjD9iHPN.js";import"./useHighlightSelectionDescription-D1zYlGyr.js";import"./useUpdateEffect-DZzCXCYl.js";import"./ListKeyboardDelegate-ClH-0lmn.js";import"./useHasTabbableChild-DM7YyZ5q.js";import"./Checkbox-Dez795cI.js";import"./check-Bn2Dvw2K.js";import"./useToggleState-CbdS7hfR.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
