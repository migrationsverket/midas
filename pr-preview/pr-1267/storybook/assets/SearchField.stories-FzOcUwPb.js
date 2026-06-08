import{r as m,f as l,j as t}from"./iframe-_-I-4bmX.js";import{S as d}from"./SearchField-CQeWOyqq.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cud76x5P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzcaSYTj.js";import"./clsx-B-dksMZM.js";import"./Form-BKf2BDdV.js";import"./useFocusRing-CMcqGwdV.js";import"./index-0H3AV5Mt.js";import"./index-BRnMJqMO.js";import"./Input-urStWhUC.js";import"./Hidden-BeH_JIKl.js";import"./Button-tRjJFBuJ.js";import"./useLabel-B1uHly2S.js";import"./useLabels-DUwK_POH.js";import"./useButton-CyQYrR3g.js";import"./FieldError-B-jtvqK5.js";import"./Text-Cm78CGL1.js";import"./clsx-Ciqy0D92.js";import"./Text-CY5kPrUO.js";import"./RSPContexts-CMPH0wn8.js";import"./Group-DnmxEfp3.js";import"./useControlledState-CitIWhQv.js";import"./useLocalizedStringFormatter-CCGAROZM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CcAW_0Ue.js";import"./useField-D0ShrdTz.js";import"./TextField.module-DdivwlC8.js";import"./search-B0IreHXS.js";import"./createLucideIcon-0TA1baeh.js";import"./x-D2ojVt-R.js";import"./useLocalizedStringFormatter-Cf6u5T_L.js";import"./Button-Cur5alMr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CK8kGowV.js";import"./Collection-CWOLxi88.js";import"./index-uCmAEo7z.js";import"./DragAndDrop-Bm48Pp7H.js";import"./getScrollParent-BjhgnRjO.js";import"./scrollIntoView-CFKl5YUv.js";import"./SelectionIndicator-Civ_JKaJ.js";import"./SelectionManager-CKx8RmD7.js";import"./useEvent-BT5AWThM.js";import"./useDescription-BdnU8zj8.js";import"./inertValue-BlyZJ4kG.js";import"./useHighlightSelectionDescription-dQZl-9Z-.js";import"./useUpdateEffect-CRHSweTu.js";import"./ListKeyboardDelegate-0iBGtitd.js";import"./useHasTabbableChild-BS0g4kA_.js";import"./Checkbox-C1Bp9kIq.js";import"./check-20bRhoEa.js";import"./useToggleState-D57fRWNH.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
