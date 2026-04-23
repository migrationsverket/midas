import{r as m,f as l,j as t}from"./iframe-BYwHSihz.js";import{S as d}from"./SearchField-36kRimES.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D9HfA5Up.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dh-IoFbm.js";import"./clsx-B-dksMZM.js";import"./Form-xzTb284W.js";import"./useFocusRing-DxmY0qcu.js";import"./index-CpfVIqpP.js";import"./index-d1liSO_o.js";import"./Input-d_MJQ0-d.js";import"./Hidden-DpptCkiu.js";import"./Button-DOnb1gUF.js";import"./useLabel-AYJIbpQy.js";import"./useLabels-C66ukF51.js";import"./useButton-xvHSlbxN.js";import"./FieldError-BWBSyxmE.js";import"./Text-DJX_2QXd.js";import"./clsx-Ciqy0D92.js";import"./Text-BHNKCnwU.js";import"./RSPContexts-BAR4w1ha.js";import"./Group-CHWkQxXC.js";import"./useControlledState-CJUIxKhT.js";import"./useLocalizedStringFormatter-CIU3iXEN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DGxfNyX_.js";import"./useField-Civc57Hk.js";import"./TextField.module-DdivwlC8.js";import"./search-CmEuSgT3.js";import"./createLucideIcon-COPS1n-B.js";import"./x-CQCbnBEa.js";import"./useLocalizedStringFormatter-7gjKuEfr.js";import"./Button-crEn75HL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-2UqtjUFf.js";import"./Collection-Bo1oU8IZ.js";import"./index-Cu1eBBaC.js";import"./DragAndDrop-CJ3epVsD.js";import"./getScrollParent-DQgl8KcT.js";import"./scrollIntoView-D2NUCauH.js";import"./SelectionIndicator-jYxL6MKO.js";import"./SelectionManager-iLot_8Vm.js";import"./useEvent-CBrs3Ilv.js";import"./useDescription-CMXfddmg.js";import"./inertValue-D8FZiIvw.js";import"./useHighlightSelectionDescription-DkqbhJuh.js";import"./useUpdateEffect-DSu1XDsn.js";import"./ListKeyboardDelegate-Dk9ALlMi.js";import"./useHasTabbableChild-CrloKPnr.js";import"./Checkbox-C99bZHKh.js";import"./check-Br9RrXoj.js";import"./useToggleState-Lt0Ew-TP.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
