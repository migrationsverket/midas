import{r as m,f as l,j as t}from"./iframe-4ooqBbUt.js";import{S as d}from"./SearchField-Cwyay4g_.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D00OJYkJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DLRtaVYJ.js";import"./clsx-B-dksMZM.js";import"./Form-DCni8rj5.js";import"./useFocusRing-x4N4w9bu.js";import"./index-CUG0QuFy.js";import"./index-BsCB03x8.js";import"./Input-gOxsYyz5.js";import"./Hidden-JrM4togE.js";import"./Button-BBwvVA_R.js";import"./useLabel-pwrXaBmf.js";import"./useLabels-BKydU-se.js";import"./useButton-XyhjWgk6.js";import"./FieldError-B6PivCC-.js";import"./Text-DrGdlSGk.js";import"./clsx-Ciqy0D92.js";import"./Text-2ah8hSkI.js";import"./RSPContexts-CCn7iKWs.js";import"./Group-O807xunu.js";import"./useControlledState-BAx2qeOY.js";import"./useLocalizedStringFormatter-CMLnWTsm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BH84x6e2.js";import"./useField-CwAwdwy6.js";import"./TextField.module-DdivwlC8.js";import"./search-CthBGkyx.js";import"./createLucideIcon-BAeES33l.js";import"./x-DhmDnCci.js";import"./useLocalizedStringFormatter-DmSeN8hT.js";import"./Button-BKg5QkG5.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D6FSL6iG.js";import"./Collection-Zn-QVJyy.js";import"./index-BUscyov3.js";import"./DragAndDrop-C0Ladn5W.js";import"./getScrollParent-CQlmigTk.js";import"./scrollIntoView-BOZ86Y2T.js";import"./SelectionIndicator-BTjwT-gq.js";import"./SelectionManager-NlDG7jzo.js";import"./useEvent-C_i09VmA.js";import"./useDescription-BHrIGgoU.js";import"./inertValue-BKvB2gyW.js";import"./useHighlightSelectionDescription-J7t4Rl3P.js";import"./useUpdateEffect-DbiDyyQc.js";import"./ListKeyboardDelegate-BBEpL094.js";import"./useHasTabbableChild-C0KqKHDa.js";import"./Checkbox-1aAdF6TN.js";import"./check-CgfgCBvh.js";import"./useToggleState-lfDPMIbX.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
