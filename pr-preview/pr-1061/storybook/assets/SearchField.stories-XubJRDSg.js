import{r as m,f as l,j as t}from"./iframe-CJaokZwQ.js";import{S as d}from"./SearchField-CfxXtfiV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CUOme2Rg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BapUYJTX.js";import"./utils-CtEzJMyp.js";import"./useLocalizedStringFormatter-Br5nqNbf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CrCHnRsO.js";import"./useFocusRing-Cs3fdfob.js";import"./index-D_wF1tYg.js";import"./index-Do-aKMQQ.js";import"./useFormValidation-4xdkgZhP.js";import"./useField-rWEXGZMG.js";import"./Button-CWvwIKjb.js";import"./Hidden-dqqTUJoh.js";import"./useLabels-CU-zAJI-.js";import"./useButton-CHkz07fZ.js";import"./search-CxDt3pVC.js";import"./createLucideIcon-CyHnGhZ5.js";import"./ClearButton-Cu9YtM68.js";import"./Button-Tydpx-JE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DQMMP8yJ.js";import"./VisuallyHidden-BY13fAwc.js";import"./x-FvjZsqr0.js";import"./FieldError-Jy1N-IKu.js";import"./Text-Cl09Gfu2.js";import"./Text-DfXjE_jj.js";import"./RSPContexts-DHtEutMT.js";import"./Collection-DfJ8PRvx.js";import"./index-DhTDUGqk.js";import"./DragAndDrop-2Sp3Q6Sj.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cgmxxflr.js";import"./SelectionManager-DNlPeSZx.js";import"./useEvent-IUkh-taB.js";import"./useDescription-Cr4AdXjz.js";import"./inertValue-CUs44PGN.js";import"./useHighlightSelectionDescription-B9ntCtl6.js";import"./useUpdateEffect-DgVGqVxP.js";import"./ListKeyboardDelegate-DI7wiiNN.js";import"./useHasTabbableChild-BPKhu1i_.js";import"./Checkbox-CNC7LSkw.js";import"./Form-DHxo0x7g.js";import"./check-DjzBubbV.js";import"./useToggleState-CltWFwpl.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
