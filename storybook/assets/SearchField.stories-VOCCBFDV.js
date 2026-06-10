import{r as m,f as l,j as t}from"./iframe-Dtb7hqk6.js";import{S as d}from"./SearchField-B484h0fX.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BCKMMyv1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DwGYJ0wo.js";import"./clsx-B-dksMZM.js";import"./Form-Cgua6hQf.js";import"./useFocusRing-RCYgGSJe.js";import"./index-VDhw-r5F.js";import"./index-BaORL6uX.js";import"./Input-CEKUG48_.js";import"./Hidden-DQwBNi6i.js";import"./Button-BTwY4tVw.js";import"./useLabel-D9hpHeoi.js";import"./useLabels-DiO75QpW.js";import"./useButton-D8LV6Lrl.js";import"./FieldError-CymQbIva.js";import"./Text-Dub-joLT.js";import"./clsx-Ciqy0D92.js";import"./Text-wLzVGxAi.js";import"./RSPContexts-BRMTqOVY.js";import"./Group-C8i1Lk7e.js";import"./useControlledState-B0XIHWrT.js";import"./useLocalizedStringFormatter-imoO5bwq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BZdcatsz.js";import"./useField-BGrWgRXS.js";import"./TextField.module-DdivwlC8.js";import"./search-DVMlGC5b.js";import"./createLucideIcon-CMh4hIEg.js";import"./x-BPYm2e-6.js";import"./useLocalizedStringFormatter-BZzFMzpp.js";import"./Button-CgYfRdd2.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BB5g-TMV.js";import"./Collection-BD38zrZ2.js";import"./index--ZHyBOuJ.js";import"./DragAndDrop-gxF0AoEK.js";import"./getScrollParent-DsHrkiO1.js";import"./scrollIntoView-1v2Kx20c.js";import"./SelectionIndicator-CI77rCMa.js";import"./SelectionManager-LaKed2sG.js";import"./useEvent-CrQdtEE9.js";import"./useDescription-BRXkpFwc.js";import"./inertValue-CqWnCzhT.js";import"./useHighlightSelectionDescription-BA-IRzZr.js";import"./useUpdateEffect-DGI-u_7Q.js";import"./ListKeyboardDelegate-C7bJgaTj.js";import"./useHasTabbableChild-CyJEC-RE.js";import"./Checkbox-BtYhtucg.js";import"./check-BdZYtbDL.js";import"./useToggleState-CDHOnc1N.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
