import{r as m,f as l,j as t}from"./iframe-CGGmCHdK.js";import{S as d}from"./SearchField-CXncDms5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-hobSD__9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-x5f61b7i.js";import"./utils-D-bfWJQo.js";import"./useLocalizedStringFormatter-BPgmIhkN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BrjILwP2.js";import"./useFocusRing-BpvWxL7t.js";import"./index-DCMIOYtC.js";import"./index-xSCn676G.js";import"./useFormValidation-DwbgJzYa.js";import"./useField-Czho_fib.js";import"./Button-CSNXBxJJ.js";import"./Hidden-yGKkmiYH.js";import"./number-DfkVkf0F.js";import"./useLabels-DYBD-9_u.js";import"./useButton-BhWcO4Um.js";import"./search-Cfnnr7dj.js";import"./createLucideIcon-D7mqoZIq.js";import"./ClearButton-BFKypSzR.js";import"./Button-q0sQUu-L.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-w_7AiL4k.js";import"./VisuallyHidden-3IaiNxxm.js";import"./x-CGpjQ8Iu.js";import"./FieldError-DeWUCxqP.js";import"./Text-DLgi0cnJ.js";import"./Text-C7tJFFeN.js";import"./RSPContexts-B3O5q3W4.js";import"./Collection-BGFQqU5g.js";import"./index-XTyyo0jd.js";import"./DragAndDrop-CYOZIPXb.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BFYE2p2o.js";import"./SelectionManager-CyjXmeST.js";import"./useEvent-BELLYkgM.js";import"./useDescription-D5Oxry_M.js";import"./inertValue-xjhObg55.js";import"./useHighlightSelectionDescription-BojtquNi.js";import"./useUpdateEffect-BLSduk9i.js";import"./ListKeyboardDelegate-DXI6yf3X.js";import"./useHasTabbableChild-BeY5r4yZ.js";import"./Checkbox-BRLzLiU5.js";import"./Form-Cp7q5sqz.js";import"./check-DJf7oi2z.js";import"./useToggleState-6knEw6PI.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
