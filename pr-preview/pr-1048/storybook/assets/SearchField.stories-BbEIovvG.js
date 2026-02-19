import{r as m,f as l,j as t}from"./iframe-yRPWKz3A.js";import{S as d}from"./SearchField-DkYuXGDH.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CYHeBJxG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BarJv6Wp.js";import"./utils-YVdcHFiv.js";import"./useLocalizedStringFormatter-jogrdBwj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wm1SAiAm.js";import"./useFocusRing-CAbobd4s.js";import"./index-CcWiq_3n.js";import"./index-DUJFKGcA.js";import"./useFormValidation-DBCFIZZo.js";import"./useField-301n7V83.js";import"./Button-D8bYImzz.js";import"./Hidden-DZj0yzJG.js";import"./number-DfkVkf0F.js";import"./useLabels-Xwis0UQD.js";import"./useButton-BMOjGRCO.js";import"./search-CCXx1SWA.js";import"./createLucideIcon-Cf0XVHZS.js";import"./ClearButton-BYuhFoS8.js";import"./Button-DGlNCwfb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8EuLi5lS.js";import"./VisuallyHidden-Cc0Z01Ry.js";import"./x-BKX7ip5H.js";import"./FieldError-DMHHwpAd.js";import"./Text-BN91Y8yX.js";import"./Text-LxP77sjg.js";import"./RSPContexts-BcvAwuF9.js";import"./Collection-B8SkfpOT.js";import"./index-DBHRQTL_.js";import"./DragAndDrop-DzRZuRI5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DmIxpJkr.js";import"./SelectionManager-B85cEwAE.js";import"./useEvent-a-O8nmXP.js";import"./useDescription-Bug5IgMM.js";import"./inertValue-BeDuPWD0.js";import"./useHighlightSelectionDescription-Gru8HG0U.js";import"./useUpdateEffect-ZLF7CaDQ.js";import"./ListKeyboardDelegate-B9EpQ450.js";import"./useHasTabbableChild-BQLrjA7D.js";import"./Checkbox-BMSTHn3R.js";import"./Form-FdfKyhwb.js";import"./check-T4tJrtYg.js";import"./useToggleState-DLelHxLE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
