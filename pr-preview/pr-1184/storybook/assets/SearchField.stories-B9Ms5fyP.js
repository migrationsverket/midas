import{r as m,f as l,j as t}from"./iframe-2N4-NX-9.js";import{S as d}from"./SearchField-DnDfuddU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-ClLv8uGO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BDyzcRVF.js";import"./clsx-B-dksMZM.js";import"./Form-CJZMhU9i.js";import"./useFocusRing-CqNKm5um.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./Input-jt-MUZjv.js";import"./Hidden-ByQp7cFw.js";import"./Button-BdOK34vS.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./FieldError-DbzXWBkQ.js";import"./Text-CG1bHrxb.js";import"./clsx-Ciqy0D92.js";import"./Text-C8oRKnIX.js";import"./RSPContexts-euEKx97A.js";import"./Group-DSrCwX2F.js";import"./useControlledState-CJB9gvxC.js";import"./useLocalizedStringFormatter-B22JGswt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DHcMB_qS.js";import"./useField-BL1xHxSq.js";import"./TextField.module-DdivwlC8.js";import"./search-cvsezeRZ.js";import"./createLucideIcon-BP_ZdL8b.js";import"./x-Ceu0gGLD.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./Button-BhHUqRPQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BgOvzTZH.js";import"./Collection-jtJmnuzI.js";import"./index-C5BRSQvZ.js";import"./DragAndDrop-DZ715S4r.js";import"./getScrollParent-zIWWR_Mu.js";import"./scrollIntoView-7_tk7XK0.js";import"./SelectionIndicator-Cx6zjUGL.js";import"./SelectionManager-n4T0I50n.js";import"./useEvent-Br-HnPPz.js";import"./useDescription-QUyLBt1z.js";import"./inertValue-d5MVVbd4.js";import"./useHighlightSelectionDescription-Cn6tdgjK.js";import"./useUpdateEffect-C8hKK484.js";import"./ListKeyboardDelegate-DzmftUWc.js";import"./useHasTabbableChild-TdGdqK31.js";import"./Checkbox-B5AS17d0.js";import"./check-BThGx1wr.js";import"./useToggleState-BNXxIaXx.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
