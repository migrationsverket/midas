import{r as m,f as l,j as t}from"./iframe-BpYPS4gm.js";import{S as d}from"./SearchField-BLaiZfH4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CnWiDAlG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkzBTegZ.js";import"./clsx-B-dksMZM.js";import"./Form-WJVKf5wp.js";import"./useFocusRing-Pq1S8Nkx.js";import"./index-C8EDYR9x.js";import"./index-CpQ1o8lj.js";import"./Input-BIlMzWOR.js";import"./Hidden-CTNCg_YB.js";import"./Button-DUppCSnI.js";import"./useLabel-DRewtayt.js";import"./useLabels-OrklnJZf.js";import"./useButton-BrYERvfl.js";import"./FieldError-zyWIi-nv.js";import"./Text-CFeigIHC.js";import"./clsx-Ciqy0D92.js";import"./Text-DftiSqWN.js";import"./RSPContexts-Dy5rD26Q.js";import"./Group-DFTVyhbS.js";import"./useControlledState-I9JlEHBp.js";import"./useLocalizedStringFormatter-QtzCwA5z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DsORATT_.js";import"./useField-BW6eOBuw.js";import"./TextField.module-DdivwlC8.js";import"./search-DwP7h4bn.js";import"./createLucideIcon-Crq6vW28.js";import"./x-CV7Jhp5u.js";import"./useLocalizedStringFormatter-Bf3e6727.js";import"./Button-BN_pdcuF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DHzGM297.js";import"./Collection-nGuo6sVM.js";import"./index-B941AFyx.js";import"./DragAndDrop-CfmUWnWK.js";import"./getScrollParent-DWwoSmAy.js";import"./scrollIntoView-CExkIFba.js";import"./SelectionIndicator-00bJR3jm.js";import"./SelectionManager-mrLC95FY.js";import"./useEvent-DFWay8hB.js";import"./useDescription-DQt5_MYb.js";import"./inertValue-UPWSklxB.js";import"./useHighlightSelectionDescription-CGjviAGy.js";import"./useUpdateEffect-Ccqyt6dx.js";import"./ListKeyboardDelegate-DyuD9bVA.js";import"./useHasTabbableChild-BsaUPBgv.js";import"./Checkbox-Bkrt5zYr.js";import"./check-C_KiUWRH.js";import"./useToggleState-tTlu0OdN.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
