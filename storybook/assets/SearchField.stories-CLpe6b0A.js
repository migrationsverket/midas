import{r as m,f as l,j as t}from"./iframe-D_5POFLP.js";import{S as d}from"./SearchField-CaL07wdP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DmkBMhlr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DO_vjv71.js";import"./clsx-B-dksMZM.js";import"./Form-C_lLIp1i.js";import"./useFocusRing--g4Wtvt8.js";import"./index-DqO0WD41.js";import"./index-cRMo-pfK.js";import"./Input-US2W4nt2.js";import"./Hidden-CviAMZFs.js";import"./Button-fdQqDZ1U.js";import"./useLabels-BXPD6Dkt.js";import"./useButton-BcNImXbv.js";import"./FieldError-EOiA5P3C.js";import"./Text-BKb3b_9z.js";import"./clsx-Ciqy0D92.js";import"./Text-yMJxKm-c.js";import"./RSPContexts-xL2uHiKx.js";import"./Group-CSZ6p5rU.js";import"./useControlledState-BKs1wQOh.js";import"./useLocalizedStringFormatter-zQAwDCu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRJmg6nt.js";import"./useField-BuH4E1_r.js";import"./TextField.module-DdivwlC8.js";import"./search-DH66lFRD.js";import"./createLucideIcon-DU05kscE.js";import"./x-CkDzpDVd.js";import"./useLocalizedStringFormatter-DWsBg7K0.js";import"./Button-C961Ae12.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-2Q1B73xw.js";import"./Collection-8INC1-Qf.js";import"./index-DNi2n4sA.js";import"./DragAndDrop-zk0gfCPp.js";import"./getScrollParent-BYXaL0zG.js";import"./scrollIntoView-Dkbfokvi.js";import"./SelectionIndicator-DHJ7VJ-g.js";import"./SelectionManager-DGZeOopH.js";import"./useEvent-BsKV9JIv.js";import"./useDescription-RX7Ggrwn.js";import"./inertValue-TDrlQRCd.js";import"./useHighlightSelectionDescription-CwngBlxL.js";import"./useUpdateEffect-Djuhbf7V.js";import"./ListKeyboardDelegate-B-2PJQ8L.js";import"./useHasTabbableChild-kOlzIWWE.js";import"./Checkbox-Bs6GXNOt.js";import"./check-Do8tflLN.js";import"./useToggleState-CC8Ivf0_.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
