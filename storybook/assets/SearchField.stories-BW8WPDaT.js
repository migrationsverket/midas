import{r as m,f as l,j as t}from"./iframe-DXDVea5_.js";import{S as d}from"./SearchField-Miy-4XQE.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-roVpv85Z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CbOkSAeB.js";import"./utils-DmTgTNnL.js";import"./useLocalizedStringFormatter-CUxy-dqS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DozbA8P4.js";import"./useFocusRing-CEQXzaY3.js";import"./index-BnRq08uH.js";import"./index-5yLJteXC.js";import"./useFormValidation-CD1pPQHY.js";import"./useField-Dfhs4VTn.js";import"./Button-B96QzwM1.js";import"./Hidden-Fdu7osLZ.js";import"./useLabels-CE1k4rx3.js";import"./useButton-fPBc3Yts.js";import"./search-XBXjPP1d.js";import"./createLucideIcon-De5c0UOR.js";import"./ClearButton-Z4BD_iJ6.js";import"./Button-gdOhQx8I.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BRUhSZ3u.js";import"./VisuallyHidden-Cz2sP0_V.js";import"./x-Dn2vW3HL.js";import"./FieldError-D7SZhjyZ.js";import"./Text-0AXlCnaa.js";import"./Text-gvZnrrW0.js";import"./RSPContexts-BS0M9Uv7.js";import"./Collection-DngwyB9A.js";import"./index-mTCCUShB.js";import"./DragAndDrop-BtrIPRyO.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUHlcaIO.js";import"./SelectionManager-D_4gDcnl.js";import"./useEvent-JQpqaSX3.js";import"./useDescription-Cg7YGuRz.js";import"./inertValue-BGqfuOEh.js";import"./useHighlightSelectionDescription-sY9qjLKl.js";import"./useUpdateEffect-Dd9sKSLJ.js";import"./ListKeyboardDelegate-80wPV2vO.js";import"./useHasTabbableChild-DB3FJQ8l.js";import"./Checkbox-DTfbiXJr.js";import"./Form-B5273415.js";import"./check-Cq2Fi8Q5.js";import"./useToggleState-Dh93-PiU.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
