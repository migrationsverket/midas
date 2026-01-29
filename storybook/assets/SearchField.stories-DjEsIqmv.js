import{r as m,f as l,j as t}from"./iframe-D3uV68TR.js";import{S as d}from"./SearchField-DrpfnRwN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ch90vxLP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-uFjFm_rq.js";import"./utils-7nr-C6ys.js";import"./useLocalizedStringFormatter-R3NfFNfF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C863LH_y.js";import"./useFocusRing-DfPZHRVl.js";import"./index-INuPvpIH.js";import"./index-DUb-e4iZ.js";import"./useFormValidation-CyzYdU7h.js";import"./useField-D48HVbT8.js";import"./Button-BeBrTPVv.js";import"./Hidden-0XUUlgXf.js";import"./useLabels-D4jFczgK.js";import"./useButton-B0sADiYr.js";import"./search-DEOfzne1.js";import"./createLucideIcon-Pfr8ga1h.js";import"./ClearButton-BAEDj2dL.js";import"./Button-DmYYanIx.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DdjluxKF.js";import"./VisuallyHidden-B8aOQmln.js";import"./x-Bx0ljM1v.js";import"./FieldError-DuEfq7zL.js";import"./Text-C9SR50_u.js";import"./Text-DahtYGrH.js";import"./RSPContexts-Cp9yvvLl.js";import"./Collection-DGF7qU3T.js";import"./index-DqtRELXK.js";import"./DragAndDrop-CmNp5D3c.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COEdmALQ.js";import"./SelectionManager-kc8cebYT.js";import"./useEvent-C0nrqgpJ.js";import"./useDescription-DOabLsSP.js";import"./inertValue-9RqoP0jC.js";import"./useHighlightSelectionDescription-eXkL_9iS.js";import"./useUpdateEffect-iyIIEQ43.js";import"./ListKeyboardDelegate-Skhb0kqg.js";import"./useHasTabbableChild-gYvcXp4e.js";import"./Checkbox-cTzUJLPa.js";import"./Form-B33azaQ8.js";import"./check-DDTQN1E0.js";import"./useToggleState-Bct0BbW7.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
