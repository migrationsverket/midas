import{r as m,f as l,j as t}from"./iframe-BqxXwJvW.js";import{S as d}from"./SearchField-DxeLj6f2.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BnTSJcsm.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGI1N2va.js";import"./utils-B-LUwfNM.js";import"./useLocalizedStringFormatter-CfrYnOvZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BV3Nt8ev.js";import"./useFocusRing-DRB9GHUu.js";import"./index-DaPmNw3z.js";import"./index-DnASvcrD.js";import"./useFormValidation-B5-yItUz.js";import"./useField-DwRopjyw.js";import"./Button-C0pllIm8.js";import"./Hidden-Bzkr_wjp.js";import"./useLabels-DQzS7WhL.js";import"./useButton-Cj_RDJUs.js";import"./search-EgW4CKy6.js";import"./createLucideIcon-DAQszgUd.js";import"./ClearButton-v0HDUt3b.js";import"./Button-CY_lcceX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C4Z7JSsl.js";import"./VisuallyHidden-DQls1uVt.js";import"./x-BelE39Lb.js";import"./FieldError-BJ23uTJc.js";import"./Text-POKFtH9S.js";import"./Text-CN0Rba2k.js";import"./RSPContexts-B2PTEsUQ.js";import"./Collection-WRVPAV2J.js";import"./index-DSlMsjV2.js";import"./DragAndDrop-CB7Yk8ib.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-815jzngV.js";import"./SelectionManager-B8Rp-4Hs.js";import"./useEvent-BnnUnxNN.js";import"./useDescription-BoAi9bEV.js";import"./inertValue-C1REkDAH.js";import"./useHighlightSelectionDescription-BouMhaiy.js";import"./useUpdateEffect-Cq1M1G5e.js";import"./ListKeyboardDelegate-m7or5xuQ.js";import"./useHasTabbableChild-DkxhhUvb.js";import"./Checkbox-D16svwRh.js";import"./Form-8dObOJRH.js";import"./check-BRqTaETN.js";import"./useToggleState-BkYrVx-b.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
