import{r as m,f as l,j as t}from"./iframe-CmPG4FoB.js";import{S as d}from"./SearchField-CD6LSez4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BBNzZ6bh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DykEM3ap.js";import"./utils-BAAQ8UkA.js";import"./useLocalizedStringFormatter-BgmHW-Xx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSNR_uxW.js";import"./useFocusRing-Cb7-V4u2.js";import"./index-B72qOhyX.js";import"./index-CWU1EcPI.js";import"./useFormValidation-D90F9Ft3.js";import"./useField-0rPxrk8p.js";import"./Button-BopS93OI.js";import"./Hidden-BRolh-uL.js";import"./useLabels-8sZBmGn_.js";import"./useButton-MazVA7qC.js";import"./search-CI8MaTGd.js";import"./createLucideIcon-BxIqJcJw.js";import"./ClearButton-MifWGxo7.js";import"./Button-ryGeYMAs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C9Gk6SCX.js";import"./VisuallyHidden-Du1fTxZa.js";import"./x-FrzhBZNc.js";import"./FieldError-BBtlti2J.js";import"./Text-Cy2IEGkF.js";import"./Text-C8u6JSGZ.js";import"./RSPContexts-Cjk68_Rq.js";import"./Collection-BwbdgeJH.js";import"./index-BYkDUZ2-.js";import"./DragAndDrop-wgbvUJfy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-E1JMO_0P.js";import"./SelectionManager-BkzOSiiK.js";import"./useEvent-C4oXjZGM.js";import"./useDescription-DsFIZovu.js";import"./inertValue-CYTV2hfJ.js";import"./useHighlightSelectionDescription-CzGfjmyT.js";import"./useUpdateEffect-DAgcakrq.js";import"./ListKeyboardDelegate-ByK-z0nv.js";import"./useHasTabbableChild-7CHAkmBX.js";import"./Checkbox-BmTyE7T9.js";import"./Form-DYt1yWSH.js";import"./check-tdaJa0jL.js";import"./useToggleState-C1LwacOp.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
