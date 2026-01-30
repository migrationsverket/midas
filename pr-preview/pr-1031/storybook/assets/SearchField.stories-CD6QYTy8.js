import{r as m,f as l,j as t}from"./iframe-CzkIVWu3.js";import{S as d}from"./SearchField-B8UhF9vh.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dm6B3iXu.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cna3kncS.js";import"./utils-DZrNC9W-.js";import"./useLocalizedStringFormatter-Bj-fK2b0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BmmMvCiW.js";import"./useFocusRing-m88TTZQ1.js";import"./index-B4Y469Zs.js";import"./index-CS5avNyc.js";import"./useFormValidation-PxMK62x-.js";import"./useField-Ds0Z1Igf.js";import"./Button-DhtFINKQ.js";import"./Hidden-D7FrmOoe.js";import"./useLabels-Dsf3Sz-Y.js";import"./useButton-Bky5JxvW.js";import"./search-zWaX1T_9.js";import"./createLucideIcon-DxsLAk9T.js";import"./ClearButton-Dk8kmEwu.js";import"./Button-DaFIfdKd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-YJ9MX6im.js";import"./VisuallyHidden-C9fSBHBW.js";import"./x-Dvr9Mgrq.js";import"./FieldError-BfaONkuD.js";import"./Text-SOVw6BD9.js";import"./Text-DYfagpWy.js";import"./RSPContexts-BCM-zQK8.js";import"./Collection-BL35lM_F.js";import"./index-DT3i1LOp.js";import"./DragAndDrop-CeuZFIPR.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CyeKwJf3.js";import"./SelectionManager-Dq4NnlAM.js";import"./useEvent-BUHVKPgO.js";import"./useDescription-WzmBOmwR.js";import"./inertValue-Cu40GS-V.js";import"./useHighlightSelectionDescription-CkefVCKb.js";import"./useUpdateEffect-CfWPrZul.js";import"./ListKeyboardDelegate-DoMDUw9w.js";import"./useHasTabbableChild-Du6y55PN.js";import"./Checkbox-Bz-RWR1B.js";import"./Form-DSqWRRTm.js";import"./check-D-m1WARu.js";import"./useToggleState-Coqgl6z4.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
